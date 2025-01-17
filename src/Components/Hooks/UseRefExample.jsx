import React, { useRef } from 'react'

const UseRefExample = () => {

    const changeRef = useRef()
    const changeClick = useRef()

    const handleChange = () => {
        changeRef.current.style.color="red"
        changeRef.current.style.backgroundColor="blue"
    }

    const handleClick = () => {
        changeClick.current.focus()
        changeClick.current.style.color="red"
    }

  return (
    <div>
        <input type="text" ref={changeRef} name="" id="" onChange={handleChange} />

        <br /><br />

        <input type="text" ref={changeClick} name="" id="" />
        <button onClick={handleClick}>CLICK</button>
    </div>
  )
}

export default UseRefExample
