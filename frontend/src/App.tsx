import React from 'react'

import type { AppQuery } from "./__generated__/AppQuery.graphql";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";

import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"
import { Checkbox } from "./components/ui/checkbox"

import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

interface itemData {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  // RELAY -> Handle Queries (READ)
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        # Data fetch
        todoItems {
          id,
          content,
          isCompleted
        }
      }
    `,
    {}
  );
  const todoLists = data.todoItems
  
  // RELAY -> handle Creates
  // use useMutation API to execute a mutation
  // returns a tuple of items (callback) - commitMutation
  const [commitCreateMutation] = useMutation(
    graphql`
      mutation AppCreateMutation($content: String!) {
        createTodoItem(content: $content) {
          id
          content
          isCompleted
        }
      }
    `
  );
  const contentItemRef = React.useRef<HTMLInputElement>(null) // allow value to be cleared
  const handleCreateTodo = () => {
    const contentItem = contentItemRef.current?.value ?? "";
    
    // commitMutation = interface which allow us to write data to RELAY
    commitCreateMutation({
      variables: { content: contentItem },
      optimisticResponse: {
        createTodoItem: {
          id: Math.random().toString(36), // random ID
          content: contentItem,
          isCompleted: false,
        },
      },
      updater: (store) => {
        const root = store.getRoot();
        const todoItems = root.getLinkedRecords("todoItems") || [];
        const newTodoItem = store.getRootField("createTodoItem");
        root.setLinkedRecords([...todoItems, newTodoItem], "todoItems");
      },

      onCompleted: () => {
        console.log("Todo item created successfully");
        contentItemRef.current!.value = ""
      },
      onError: (error) => { 
        console.log("Error deleting todo item:", error)
      },
    });
  }


  // RELAY -> handle Delete
  const [commitDeleteMutation] = useMutation(
    graphql`
      mutation AppDeleteMutation($id: String!) {
        deleteTodoItem(id: $id)
      }
    `
  );
  const handleDeleteTodo = (item: itemData) => {
    commitDeleteMutation({
      variables: { id: item.id },
      optimisticResponse: {
        deleteTodoItem: item.id,
      },
      updater: (store) => {
        const root = store.getRoot();
        const todoItems = root.getLinkedRecords("todoItems") || [];
        const updatedItems = todoItems.filter(todo => todo.getDataID() !== item.id);
        root.setLinkedRecords(updatedItems, "todoItems");
      },
      onCompleted: () => {
        console.log("Todo item deleted successfully");
      },
      onError: (error) => {
        console.error("Error deleting todo item:", error);
      },
    });
  }

  // RELAY -> handle Update
  const [editId, setIsEditing] = React.useState("")
  const editItemRef = React.useRef<HTMLInputElement>(null)
  
  const [commitEditMutation] = useMutation(
    graphql`
      mutation AppEditMutation($id: String!, $content: String!) {
        updateTodoItem(id: $id, content: $content) {
          id
          content
          isCompleted
        }
      }
    `
  )
  const handleEditTodo = (item: itemData) => {
    if (editId === "") { 
      // Editing
      setIsEditing(item.id)
    } else {
      // Submit
      if (!editItemRef.current || editItemRef.current.value === "") {
        setIsEditing("")
        return
      }
      const editItem = editItemRef.current.value;
      
      commitEditMutation({
        variables: { id: item.id, content: editItem },
        optimisticResponse: {
          updateTodoItem: {
            id: item.id,
            content: editItem,
            isCompleted: item.isCompleted,
          },
        },
        updater: (store) => {
          const root = store.getRoot();
          const todoItems = root.getLinkedRecords("todoItems") || [];
          const updatedTodoItem = store.getRootField("updateTodoItem");
          if (!updatedTodoItem) return;
          const updatedItems = todoItems.map((todo) => 
            todo.getDataID() === updatedTodoItem.getDataID() ? updatedTodoItem : todo
          );
          root.setLinkedRecords(updatedItems, "todoItems");
        },
        onCompleted: () => {
          console.log("Todo item updated successfully");
        },
        onError: (error) => {
          console.error("Error updating todo item:", error);
        },
      })

      setIsEditing("")
    }

  }

  // RELAY -> handle toggle
  // const [checkedAll, setCheckedAll] = React.useState<Boolean>(false)
  const [commitToggleMutation] = useMutation(
    graphql`
      mutation AppToggleMutation($id: String!) {
        toggleTodoItem(id: $id) {
          id
          content
          isCompleted
        }
      }
    `
  )
  const handleToggleTodo = (item: itemData) => {
    // checked
    commitToggleMutation({
      variables: { id: item.id },
      optimisticResponse: {
        toggleTodoItem: {
          id: item.id,
          content: item.content,
          isCompleted: item.isCompleted,
        },
      },
      updater: (store) => {
        const root = store.getRoot();
        const todoItems = root.getLinkedRecords("todoItems") || [];
        const toggledTodoItem = store.getRootField("toggleTodoItem");
        if (!toggledTodoItem) return;
        // the function below updates the todoItems list
        // by replacing the toggled item with the updated one
        const updatedItems = todoItems.map((todo) => 
          todo.getDataID() === toggledTodoItem.getDataID() ? toggledTodoItem : todo
        );
        root.setLinkedRecords(updatedItems, "todoItems");
      },
      onCompleted: () => {
        console.log("Todo item updated completion successfully");
      },
      onError: (error) => {
        console.error("Error updating completion todo item:", error);
      },
    })
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-800 text-white justify-center items-center'>

      <Card className="w-150 h-150">
        <CardHeader>
          <CardTitle>Welcome back!</CardTitle>
          <CardDescription>Here's a list of your tasks for this month.</CardDescription>
          {/* <CardAction><Button onClick={() => handleAuthenticate()}>Sign In</Button></CardAction> */}
          <div className="flex w-full max-w-sm items-center gap-2 mt-5">
            <Input type="text" placeholder="Insert Todo" ref={contentItemRef} />
            <Button type="submit" onClick={() => handleCreateTodo()} >
              Add Task
            </Button>
          </div>
        </CardHeader>
        <CardContent className='overflow-auto'>
          <table className='w-full '>
            <TableHeader>
              <TableRow>
                <TableHead className="w-100">
                  {/* <Checkbox className='mr-3 border-gray-600' onCheckedChange={() => setCheckedAll(!checkedAll)} /> */}
                  TODO LISTS:
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {todoLists?.map((item) => (
                <TableRow key={item!.id} className='w-full flex justify-between w-full' >
                  { editId === item!.id ? (
                    <>
                      <TableCell>
                        <Input ref={editItemRef} placeholder={item?.content} className='w-100' />
                      </TableCell>
                      <TableCell className='flex gap-2'>
                        <Button type='submit' onClick={() => handleEditTodo(item!)}>Enter</Button>
                      </TableCell>
                    </>
                  ) :
                    <>
                      <TableCell className='flex justify-center items-center'>
                        <Checkbox
                          defaultChecked={!!item?.isCompleted}
                          onCheckedChange={() => handleToggleTodo(item!)}
                          className='mr-3 border-gray-600'
                        />
                        {item?.content}
                      </TableCell>
                      <TableCell className='flex gap-2'>
                        <Button onClick={() => handleEditTodo(item!)}><FaRegEdit/></Button>
                        <Button onClick={() => handleDeleteTodo(item!)}><MdDelete/></Button>
                      </TableCell>
                    </>
                  }
                </TableRow>
              ))}
            </TableBody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
