import React from 'react'

export const ToDoItrm = ({arr,onDel}) => {
  return (
    <div>
        <h4>{arr.sno}.{arr.title}</h4>
        <p >{arr.desc}</p>
        <button className='btn btn-sm btn-danger mb-3 pt-0' onClick={()=>{onDel(arr)}}>Delete</button>
    </div>
  )
}
