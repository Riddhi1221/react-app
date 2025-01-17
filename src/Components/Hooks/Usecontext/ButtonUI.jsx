import React, { useContext } from 'react'
import counterContext from './CreateCon'
const ButtonUI = () => {

    const {count , ince , dec} = useContext(counterContext)
  return (
    <div style={{textAlign:"center",paddingTop:'90px'}}>
        <h1 style={{fontSize:'40px'}}>counter:{count}</h1>
        <button style={{textAlign:"center",padding:"5px",fontSize:"18px"}} onClick={ince}>++++</button>
        <button style={{textAlign:"center",padding:"5px",fontSize:"18px"}} onClick={dec}>----</button>
    </div>
  )
}


export default ButtonUI
