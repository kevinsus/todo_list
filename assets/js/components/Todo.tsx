import React from 'react'

const Todo = () => {
  const data = {
    "todoItems": [
      {
        "content": "UPDATED!! This is a new todo list that I need to do",
        "id": 3,
        "isCompleted": false
      },
      {
        "content": "UPDATED!!",
        "id": 1,
        "isCompleted": false
      },
      {
        "content": "Hello World Testing 3",
        "id": 6,
        "isCompleted": false
      },
      {
        "content": "Hello World Testing 4",
        "id": 7,
        "isCompleted": false
      }
    ]
  }
  
  const todoItems = data.todoItems

  return (
    <div>
      <ul className='bg-blue-700'>
        {todoItems.map((item, index) => (
          <li key={index} className="text-3xl font-bold underline">- {item.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
