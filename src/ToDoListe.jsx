import React, { useState, useEffect } from "react";
import axios from "axios";
import request from "superagent";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';

function ToDoList(props) {
  /*
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await request.get("/todo/ToDoItemList");
      setData(response.body);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }
*/

  return (
    <TableContainer component={Card}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Due Date</TableCell>
          <TableCell align="right">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data && props.data.map(item => (
          <TableRow
            key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{item.id}</TableCell>
            <TableCell align="right">{item.task_name}</TableCell>
            <TableCell align="right">{item.task_description}</TableCell>
            <TableCell align="right">{item.due_date}</TableCell>
            <TableCell align="right">{item.is_completed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default ToDoList;

