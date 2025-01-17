import React, { useCallback, useMemo, useState } from 'react'
// child
const Button = React.memo(({onclick,oncng}) => {
    return (
      <div>
        <button onClick={onclick}>++++++</button>
        <button oncng={oncng}>------</button>
      </div>
    )
})

// parent
const UseCallBack = () => {


    const [count , setCount] = useState(0)

    const ince = useCallback(() => {
        setCount((count) => count + 1)
    },[])

    const dec = useCallback(() => {
      setCount((count) => count -1)
    },[])

  return (
    <div>
        <h1>{count}</h1>
        <Button onclick = {ince}></Button>
        <Button onclick = {dec}></Button>
    </div>
  )
}

export default UseCallBack
