import React from 'react'

import type { AppQuery } from "./__generated__/AppQuery.graphql";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"

import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

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
  // Handle Todo Client Items
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
  const handleDeleteTodo = (item: any) => {
    commitDeleteMutation({
      variables: { id: item.id},
      onCompleted: () => {
        console.log("Todo item deleted successfully");
      },
      onError: (error) => {
        console.error("Error deleting todo item:", error);
      },
    });
    window.location.reload()
  }

  // RELAY -> handle Update
  const [isEditing, setIsEditing] = React.useState(false)
  // const [commitEditMutation] = useMutation(
  //   graphql`
  //     mutation AppEditMutation($id: String!, $content: String!) {
  //       updateTodoItem(id: $id, content: $content)
  //     }
  //   `
  // )

  const handleEditTodo = (item: any, content: string) => {
    // commitEditMutation({
    //   variables: {id: item.id, content: content},
    //   onCompleted: () => console.log("Successfully Updated the task"),
    //   onError: (error) => console.log("Error: ", error)
    // })
  }

  const handleAuthenticate = () => {
    // 
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-800 text-white justify-center items-center'>

      <Card className="w-150 h-150">
        <CardHeader>
          <CardTitle>Welcome back!</CardTitle>
          <CardDescription>Here's a list of your tasks for this month.</CardDescription>
          <CardAction><Button onClick={() => handleAuthenticate()}>Sign In</Button></CardAction>
          <div className="flex w-full max-w-sm items-center gap-2 mt-5">
            <Input type="text" placeholder="Insert Todo" ref={contentItemRef} />
            <Button type="submit" onClick={() => handleCreateTodo()} >
              Add Task
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <table>
            <TableBody>
              {todoLists?.map((item) => (
                <TableRow key={item!.id} className='flex justify-between w-full' >
                  <TableCell>{item!.content}</TableCell>
                  <TableCell className='flex gap-2'>
                    <FaRegEdit className='hover: cursor-pointer' onClick={() => handleEditTodo(item, item?.isCompleted)} />
                    <MdDelete className='hover: cursor-pointer' onClick={() => handleDeleteTodo(item)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </table>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  )
}

export default App
