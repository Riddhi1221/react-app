import  { useState } from 'react';

const Usestate = () => {
    let [data , setdata] = useState(1)
    let Datas = () => {
        setdata(++data)
    }
    let sub = () => {
        setdata(--data)
    }
    let multi = () => {
        setdata(2*data)
    }
    let div = () => {
        setdata(2/data)
    }
    let per = () => {
        setdata(5%data)
    }
return (
    <div className='Usestate'>
        <h1 align="center">{data}</h1>
        <h1 align="center"> <button  onClick={Datas}>add</button> <button  onClick={sub}>sub</button> <button  onClick={multi}>multi</button>  <button  onClick={div}>div</button> <button  onClick={per}>per</button></h1>
    </div>
);
}

export default Usestate 
