import React, { useContext } from 'react'
import allContext from '../Uescontextex/Context'
import { Button, TextField } from '@mui/material'


const Form = () => {
  const { setValue, value, datasubmit, editIndex } = useContext(allContext)

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "40px" }} onSubmit={(e) => datasubmit(e)}>
        <TextField type="text" placeholder="Enter lastname" value={value.firstname} onChange={(e) => setValue({ ...value, firstname: e.target.value })} />
        <br />
        <TextField type="text" placeholder="Enter lastname" value={value.lastname} onChange={(e) => setValue({ ...value, lastname: e.target.value })} />
        <br />
        <TextField type="text" placeholder=" Email" value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })} />
        <br />
        <TextField type="text" placeholder="Enter Password" value={value.password} onChange={(e) => setValue({ ...value, password: e.target.value })} />
        <br />
        <Button variant="contained" type='submit' style={{ padding: "10px 10px 10px 10px", }}> {editIndex !== null ? 'Update' : 'Submit'} </Button>

      </form>
    </div>
  )
}

export default Form
