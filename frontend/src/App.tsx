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
  const [commitMutation, isMutationInFlight] = useMutation(
    graphql`
      mutation AppMutation($content: String!) {
        createTodoItem(content: $content)
      }
    `
  );

  // Handle Todo Client Items
  const [contentItem, setContentItem] = React.useState("")
  const handleCreateTodo = () => {
    // submit the mutation changes
    commitMutation({
      variables: { content: contentItem },
    });
    setContentItem(""); // Clear input after mutation
  }

  // RELAY -> handle Delete

  return (
    <div className='min-h-screen flex flex-col bg-gray-800 text-white justify-center items-center'>

      <Card className="w-150 h-150">
        <CardHeader>
          <CardTitle>Welcome back!</CardTitle>
          <CardDescription>Here's a list of your tasks for this month.</CardDescription>
          <CardAction>Action</CardAction>
          <form className="flex w-full max-w-sm items-center gap-2 mt-5">
            <Input type="email" placeholder="Insert Todo" onChange={(e:any) => setContentItem(e.target.value)} disabled={isMutationInFlight} />
            <Button type="submit" onClick={() => handleCreateTodo()} >
              Add Task
            </Button>
          </form>
        </CardHeader>
        <CardContent>
          {todoLists?.map((item) => (
            <div key={item!.id}>{item!.content}</div>
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
