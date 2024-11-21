import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';

const ApiCrud = () => {
    const formik = useFormik({
        initialValues: {
          title: '',
          userid: '',
          },
        onSubmit: async (values) => {
        //   alert(JSON.stringify(values, null, 2));
        try {
          let res = await axios.post("https://dummyjson.com/posts", values,{
            headers: { 'Content-Type': 'application/json' },
          });
          console.log(res);
            
        } catch (error) {
            
        }
        },
      });
    //   useEffect(() =>{
    //     dataFetch();
    //   }, [])
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
       <label htmlFor="userid">userid</label>
       <input
         id="userid"
         name="userid"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.userid}
       />
       <br />
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default ApiCrud