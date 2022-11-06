import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
// import uuid from 'react-uuid';
import Header from '../components/Header'
import AddChild from '../components/AddChild';
import ChildrenList from '../components/ChildrenList';

const Home = () => {

    const[selected,setSelected]=useState('')
    const[children,setChildren]=useState([])
    const[child,setChild]=useState({ 
        id:'',      
        name:'',
        age:'',
        address:''
    })  
    const{name,age,address,id}=child
 
    const handleChange=e=>{       
        const{name,value}=e.target
        setChild({...child,
            id:uuidv4(),
            [name]:value
        })  
    }  
   
    useEffect(()=>{
        if(selected){           
            const guy=children.find(guy=>guy.id===selected)           
            setChild(guy)
        }
    },[selected,children])  

    const clear=()=>{
        setChild({ 
            id,        
             name:'',
             address:'',
             age:'' 
         })
    }
    
 
    const addChild=()=>{        
        setChildren([...children, 
            child
        ])
        //clear form
        clear()
    }

   
 
    // console.log(children) 
    
 
    const updateChild=id=>{        
        const updated=children?.map(son=>son.id===id ? {...son,name:name,age:age,address:address}:son)        
        setChildren(updated)
        clear()
        setSelected('')
    }

    const deleteChild=id=>{
        const deleted=children.filter(guy=>guy.id !== id)      
        clear()
         setSelected('')
        setChildren(deleted)
    }
   
  return (    
    <div className='w-full'> 
        <Header/> 

        {/* Add Child Component */}
         <AddChild selected={selected} setSelected={setSelected} name={name} age={age} address={address} id={id} handleChange={handleChange} updateChild={updateChild} addChild={addChild} clear={clear} deleteChild={deleteChild} children={children}/>

        {/* Show Children */}
        <ChildrenList children={children} selected={selected} setSelected={setSelected}/>
    </div> 
  )
}
 
export default Home