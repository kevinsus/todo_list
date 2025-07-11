import React from 'react'

import type { AppQuery } from "./__generated__/AppQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";

interface todoItem {
  id: string,
  content: string,
  isCompleted: boolean
}

function App() {
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


  return (
    <div className='bg-black min-h-screen text-white'>
      {todoLists?.map((item) => (
        <li key={item!.id}>{item!.content}</li>
      ))}
    </div>
  )
}

export default App
