import React from 'react'
import './App.css'

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
      Hello World
    </div>
  )
}

export default App
