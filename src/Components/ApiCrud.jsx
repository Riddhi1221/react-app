import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';

const ApiCrud = () => {
  let [data , setdata]=useState ([]);
  const formik = useFormik({
    initialValues: {
      title: '',
      userId: '',
    }, 
    onSubmit: async (values) => {
      console.log(values);
      
      //   alert(JSON.stringify(values, null, 2));
      try {
        let res = await axios.post('https://dummyjson.com/posts/add', values, {
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(res);

      } catch (error) {
          console.log(error);
          
      }
    },
  });
 async  function dataFetch() {
    try {
      let res = await axios.get('https://dummyjson.com/posts')
      setdata(res.data.posts);
    } catch (error) {
      console.log(error);
      
    }
  }
    useEffect(() =>{
      dataFetch();
    }, []);

  async  function Delete(id){
    console.log(id);
    
    try {
      let res= await axios.delete(`https://dummyjson.com/posts/${id}`)
      console.log(res);
      
    } catch (error) {
      console.log(error.message);
      
    }
  } 
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <br />
        <label htmlFor="userId">userId</label>
        <input
          id="userId"
          name="userId"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.userId}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>userid</th>
            <th>Delete</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el,id) => {
          return(
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{el.userId}</td>
            <td><button onClick={()=> Delete(el.id)}>Delete</button></td>
            <td><button  >Updata</button></td>
          </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default ApiCrud