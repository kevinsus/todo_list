import React from 'react'

import type { AppQuery } from "./__generated__/AppQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";

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

  console.log(data)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
