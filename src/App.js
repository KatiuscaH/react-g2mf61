import React from "react";
import "./style.css";
import { useState } from 'react'

export default function List() {
  const [ list, useList ] = useState([{name: 'Andy', lastName: 'Smith', completed: false}]);
  const [ value, useNewValue ] = useState({})

   const deleteElement = (index) => {
    const filteredArray = list.filter((_, i) => i !== index)
    useList(filteredArray)
  }

  const addItems = () => {
    useList([...list, value])
  }

  const getValue = (event) => {
    const newName = event;
    useNewValue({name: newName, lastName: 'None', completed: true});
  }

  const completeTask = (index) => {
    const newItem = list.map((e, i) => {
      if (i === index) {
        return {
          ...e,
          completed: !e.completed
        }
      } else {
        return e
      }
    })
    console.log(newItem)
    useList(newItem)
  }

  return (
    <>
      <p>List</p>
      <input onChange={() => getValue(event.target.value)}/>
      <button onClick={addItems}>Add more items</button>
      <ul>
        { list.map((e, i) => (
          <li key={e.name}>
            <p className={e.completed ? 'is-completed' : 'is-not-completed'}>{e.name} <button onClick={() => deleteElement(i)}>Delete</button> <button onClick={() => completeTask(i)}>Complete</button></p>
           </li>
        ))}
      </ul>
    </>
  )
}

export default function App() {
const [ count, useCount ] = useState(0)
const [ value, useValue ] = useState('')
const setCount = (value) => {
  useCount(count + 1);
  useValue(value)
}

  return (
    <div>
      <List />
      <h1>Counter {count}</h1>
      <button onClick={() => {setCount('value')}}>Click me! {value}</button>
    </div>
  );
}
