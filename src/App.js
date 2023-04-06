import React, { useState } from 'react'
import Form from './Model/InputForm/InputForm'
import ToDoList from './ToDoListe.jsx'
import MyButton from './Model/MyButton'
import HeaderElement from './Model/Header/HeaderElement'
import AccordionOptions from './Model/Header/AccordionOptions'

class ToDoListElement {
  constructor(id, task_name, task_description, due_date, is_completed) {
    this.id = id;
    this.task_name = task_name;
    this.task_description = task_description;
    this.due_date = due_date;
    this.is_completed = is_completed;
  }
}

export default function App() {
  const[toDoListTable, setToDoListTable] = useState(true)
  const[createToDoList, setCreateToDoList] = useState(false)
  const[id, setId] = useState(0)

  const [toDoList, setToDoList] = useState([
    new ToDoListElement(1, 'Your First Task', 'Create your first To Do Item', 'Today', 0),
  ])

  function addNewTask(task_name, task_description, due_date, is_completed) {
    const newTask = new ToDoListElement(id, task_name, task_description, due_date, is_completed);
    setId(id + 1)
    setToDoList(prevTaskList => [...prevTaskList, newTask]);
  }

 
  function handleToDoListTable(){
    setToDoListTable(true)
    setCreateToDoList(false)
  }
  function handleCreateTask(){
    setToDoListTable(false)
    setCreateToDoList(true)
  }


  return (
    <div className="container">
      <HeaderElement onToDoListTable={handleToDoListTable} onCreateTask={handleCreateTask} />
      <AccordionOptions onToDoListTable={handleToDoListTable} onCreateTask={handleCreateTask}  />
      
      {toDoListTable ? <ToDoList data={toDoList}/> : <p></p>}
      {createToDoList ? <Form handleSubmit={addNewTask} data={toDoList} /> : <p></p>}
    </div>
  )
}
