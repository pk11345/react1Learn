import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

function Student(){

  return(
    <>
    <h1>Tasks</h1>
    <ul>
      {taskList.map((task)=>{
        return <h1>{task} and total tasks are {taskList.join("  ")}</h1>
      })}
    </ul>
    </>
  )
}
const taskList = ["task1", "task2", "task3"]

createRoot(document.getElementById('root')).render(
 <Student/>
)
