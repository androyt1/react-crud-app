import React from 'react'

const Child = props => {
    const{selected,id,name,address,age,setSelected}=props
  return (
    <p onClick={()=>setSelected(id)} className={`cursor-pointer  mb-1 p-1 ${selected===id ? 'bg-blue-400 border-x-8 border-x-gray-50':'odd:bg-stone-200 '} `} >name: {name} {age} {address}</p>
  )
}

export default Child