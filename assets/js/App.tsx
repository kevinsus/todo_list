import React from 'react'
import Todo from './components/Todo'

// import { gql } from "apollo-boost"
// import { useQuery } from "@apollo/react-hooks"

const App = () => {
  // const { data, loading } = useQuery(gql`
  //   {
  //     todoItens {
  //       id content isCompleted
  //     }
  //   }
  // `)

  return (
    <div>
      <h1>Star Wars Films</h1>
      <Todo />
      {/* <ul>
        {data?.todoItems ? data.todoItems.map((item) => (
          <li key={item.id}>{item.content}</li>
        )) : null}
        {loading && <p>Loading...</p>}
      </ul> */}
    </div>
  )
}

export default App
