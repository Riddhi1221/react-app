import React, { useState } from 'react'
import Form from '../Uescontextex/Form'
import allContext from './Context'
import { Button } from '@mui/material'



const Process1 = () => {

  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [value, setValue] = useState({
    fistname: "",
    lastname: "",
    email: "",
    password: ""
  });

  function datasubmit(event) {
    event.preventDefault()
    const dataCopy = [...data, value];
    setData(dataCopy);

    setValue({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    });
  }
  const handleDelete = (index) => {
    let copyData = [...data]
    copyData.splice(index, 1)
    setData(copyData)
  };

  const handleEdit = (index) => {
    setValue(data[index]);
    setEditIndex(index);
  };



  return (
    <>
      <allContext.Provider value={{ datasubmit, value, setValue, editIndex, setEditIndex, handleDelete, handleEdit }}>
        <Form></Form>
      </allContext.Provider>

      <table border={1} width="100%">
        <thead>
          <tr>
            <th>No</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Password</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td><Button variant='contained' onClick={() => handleEdit(i)}>Update</Button></td>
                <td><Button variant='contained' onClick={() => handleDelete(i)}>Delete</Button></td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default Process1