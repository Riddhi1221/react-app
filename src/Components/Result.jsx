import React from 'react'

const Result = (props) => {
  let a = parseInt(props.sub1)
  let b = parseInt(props.sub2)
  let c = parseInt(props.sub3)
  let d = parseInt(props.sub4)
  let e = parseInt(props.sub5)

  let total = a + b + c + d + e
  let avg = total / 5
  let Max = Math.max(a, b, c, d, e)
  let Min = Math.min(a, b, c, d, e)

  return (
    <tr>
      <td>{props.no}</td>
      <td>{props.name}</td>
      <td>{props.sub1}</td>
      <td>{props.sub2}</td>
      <td>{props.sub3}</td>
      <td>{props.sub4}</td>
      <td>{props.sub5}</td>
      <td>{total}</td>
      <td>{avg}</td>
      <td>{Min}</td>
      <td>{Max}</td>
    </tr>
  )
}

export default Result
