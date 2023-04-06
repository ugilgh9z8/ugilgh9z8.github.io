import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import request from 'superagent';

function Form(props) {
  const [alert, setAlert] = useState(false);

  const[task_name, setTask_name] = useState('');
  const[task_description, setTask_description] = useState('');
  const[due_date, setDue_date] = useState('');
  const[is_completed, setIs_completed] = useState(false);

  const addTask = (event) => {
    event.preventDefault();
    try{
      props.handleSubmit(task_name, task_description, due_date, is_completed );
      console.log(props.data)
    }catch(error)
    {

      console.error(error);
    }
  }
  /*
  const postRequest = async () => {
    const apiUrl ='/todo/saveTemp';
    console.log(formData);
      
    request
      .post(apiUrl)
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res.body);
          // do something with the response, like update your component state
        }      console.log(res.data);
    }, []);
  }
  const handleSubmit = async (event) => {
    const test = {
      id: id,
      task_name: task_name,
      task_description: task_description,
      due_date: due_date,
      is_completed: is_completed ? 1 : 0
    }
      fetch('/todo/SaveToDoItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(test)
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };
*/
  return (
    <form onSubmit={addTask}>
      <Button onClick={addTask}> Submit </Button>
      <label> Name:      
        <input type="text" value={task_name} name="Task_name" onChange={(e) => setTask_name(e.target.value)} />       </label>       <br />
      <label> Task Description:
        <input type="text" value={task_description} name="Task_description" onChange={(e) => setTask_description(e.target.value)} />       </label>       <br />
      <label> Due Date:         
        <input type="datetime-local" value={due_date} name="Due_date" onChange={(e) => setDue_date(e.target.value)} />       </label>       <br />
      <label> Is Completed:         
        <input type="checkbox" value={is_completed} name="Is_completed" onChange={(e) => setIs_completed(e.target.value)} />       </label>       <br />
        {alert ? 
        <Collapse in={alert}> <Alert severity="success"  onClick={() => {setAlert(false);}}> Succesfully Uploaded! </Alert> </Collapse> 
        : <Button
        disabled={alert}
        variant="outlined"
        onClick={() => {
          setAlert(true);
        }}
      >
        Re-open
      </Button>}
      <button type="submit" onClick={() => {setAlert(true);}}>Submit</button>
    </form>
  );
}
export default Form;