import React, { useState } from 'react';
import {setSelected,deleteItem,editItem} from '../../store/actions/EmployeeActions'
import { useSelector, useDispatch } from 'react-redux'


export default function Preview({ item }) {
  const dispach = useDispatch()
  const [expand , setExpand] = useState(false)

  const handleSelect =(e,item)=>{
    dispach(setSelected(item))
  }

  const handleDelete =(e,item)=>{
    dispach(deleteItem(item))
  }

  const handleEdit =(e,item)=>{
    dispach(editItem(item))
  }

  const handleExpand =(e,item)=>{
    setExpand(!expand)
  }

  return <li>
    <div className='employee' key={item.id} >
      <div className='employee-details'>
        <span>{item.first_name} {item.last_name}</span>
        <span>{item.email}</span>
        <img className='employee-img' src={item.profile_pic} />
      </div>
      <div>
        <button onClick={(e)=>handleSelect(e,item)}>select</button>
        <button onClick={(e)=>handleEdit(e,item)}>edit</button>
        <button onClick={(e)=>handleDelete(e,item.id)}>delete</button>
      </div>
      {item.subEmployees.length > 0 && <button onClick={handleExpand}>Toggle</button>}
      {item.subEmployees.length > 0 && expand && <div>Employees : {item.subEmployees.map(subitem =>{
        return <div key={subitem.id}>{subitem.first_name}</div>
      })}</div>}
    </div>
  </li>;
}