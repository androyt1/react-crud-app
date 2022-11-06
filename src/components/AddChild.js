import React from 'react'

const AddChild = (props) => {
    const{selected,name,handleChange,age,address,updateChild,addChild,setSelected,clear,deleteChild,children}=props
  return (
    <div className='w-full text-center'>
            <h4 className='text-xl uppercase font-medium'>{selected ?'update child':'add child'}</h4>
            
            <div className='w-full md:w-[50%] mx-auto py-4'>
               
                <input type="text" name='name' value={name} onChange={handleChange} className='w-full border outline-none focus:border-2 p-2 mb-2' placeholder="Enter Child's Name Here"/>

                <input type="text" name='age' value={age} onChange={handleChange} className='w-full border outline-none focus:border-2 p-2 mb-2' placeholder="Enter Child's Age Here"/>

                <textarea cols="30" rows="2" className='w-full border outline-none focus:border-2 p-2 mb-2' placeholder="Enter Child's Address Here" name='address' value={address} onChange={handleChange}></textarea>
               
                <button className={`py-2 w-[45%] md:w-[30%] mt-4 text-sm font-medium border bg-stone-600 text-stone-50 ${selected && 'bg-green-400 text-stone-700 w-[28%]'}`} onClick={
                    ()=>{
                        selected ? updateChild(selected):addChild()
                    }
                }>{selected ? 'Update Child':'Add Child'}</button>
                {
                    selected && <button className={`px-4 py-2 ml-2 bg-orange-400 text-sm font-medium ${selected && 'w-[28%]'}`} onClick={()=>{
                        setSelected('')
                        clear()
                    }}>Cancel</button>
                }

               {
                children.length >= 1 &&  <button className={`py-2 w-[45%] md:w-[30%] mt-4 text-sm font-medium border bg-red-500 ml-2 text-stone-50  ${selected && 'w-[28%]'}`} onClick={()=>deleteChild(selected)}>Delete Child</button>
               }

            </div>
        </div>
  )
}

export default AddChild