import React, { useState } from 'react'
import counterContext from './CreateCon'
import ButtonUI from './ButtonUI'
const Process = () => {

    const [count , setCount] = useState(0)

    const ince = () => {
        setCount(count + 1)
    }

    const dec = () => {
        setCount(count - 1)
    }
  return (
    <div>
        <counterContext.Provider value={{count,ince,dec}}>
            <ButtonUI></ButtonUI>
        </counterContext.Provider>
    </div>
  )
}

export default Process
