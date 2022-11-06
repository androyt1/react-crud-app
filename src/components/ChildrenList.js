import React from 'react'
import Child from './Child'

const ChildrenList = props => {
    const{children,selected,setSelected}=props
  return (
    <div className='w-full md:w-[90%] mx-auto border text-center'>
            {children?.map(({id,age,name,address})=>(<Child key={id} selected={selected} id={id} name={name} address={address} age={age} setSelected={setSelected}/>))}
        </div>
  ) 
}

export default ChildrenList 