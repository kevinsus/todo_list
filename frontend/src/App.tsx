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
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { MdDelete } from "react-icons/md";

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
  const [commitCreateMutation] = useMutation(
    graphql`
      mutation AppCreateMutation($content: String!) {
        createTodoItem(content: $content)
      }
    `
  );

  // Handle Todo Client Items
  const [contentItem, setContentItem] = React.useState("")
  const handleCreateTodo = () => {
    // submit the mutation changes
    commitCreateMutation({
      variables: { content: contentItem },
      onCompleted: () => {
        console.log("Todo item created successfully");
      },
      onError: (error) => {
        console.log("Error deleting todo item:", error)
      },
    });
    setContentItem(""); // Clear input after mutation
  }

  // RELAY -> handle Delete
  // How the delete mutation will be able to differentiate with other mutations
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
    setContentItem(""); // Clear input after mutation
    window.location.reload()
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-800 text-white justify-center items-center'>

      <Card className="w-150 h-150">
        <CardHeader>
          <CardTitle>Welcome back!</CardTitle>
          <CardDescription>Here's a list of your tasks for this month.</CardDescription>
          <CardAction>Action</CardAction>
          <form className="flex w-full max-w-sm items-center gap-2 mt-5">
            <Input type="text" placeholder="Insert Todo" onChange={(e:any) => setContentItem(e.target.value)} />
            <Button type="submit" onClick={() => handleCreateTodo()} >
              Add Task
            </Button>
          </form>
        </CardHeader>
        <CardContent>
          {todoLists?.map((item) => (
            <div key={item!.id} className='hover: cursor-pointer flex justify-between' >
              <p>{item!.content}</p>
              <MdDelete onClick={() => handleDeleteTodo(item)} />
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
