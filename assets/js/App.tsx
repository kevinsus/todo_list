import React from 'react'
import Todo from './components/Todo'

import { AppQuery } from "./__generated__/AppQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";

const App = () => {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
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
    <div className='mt-16 flex items-center justify-center'>
      <Todo />
    </div>
  )
}

export default App
