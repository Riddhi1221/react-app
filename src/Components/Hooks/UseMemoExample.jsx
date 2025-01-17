import React, { useEffect, useMemo, useState } from 'react'

const UseMemoExample = () => {

    const [no , setNo] = useState(0)
    const [no1 , setNo1] = useState(0)

    const ince = useMemo(() => {
        console.log("Hello ==> ");
        
        return no * no
    },)



  return (
    <div>
        <h1>First state :- {no}</h1>
        <h1>Second state :- {no1}</h1>
        <h1>Memo value :- {ince}</h1>
        <button onClick={() => setNo(no + 1)}>CLICK</button>
        <button onClick={() => setNo1(no1 + 1)}>CLICK11111</button>
    </div>
  )
}

export default UseMemoExample
