import React,{useState,useEffect} from 'react'
// import axios from 'axios'


const Todo = () => {
    const [todos,setTodos]=useState([])
    const [newTodo,setNewTodo]=useState('')
    useEffect(()=>{
       const getTodo= async ()=>{
           let result= await fetch("http://localhost:3004/userData")
           let data= await result.json()
        //    console.log(data)
        setTodos(data)
       }
       getTodo()
    },[])
    const handleChange = (e)=>{
    //    console.log(e.target.value)
           setNewTodo(e.target.value)
   }

   const saveInfo= ()=>{
    fetch("http://localhost:3004/userData", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            text: newTodo,
            isCompleted: false
        }) 
    }).then(res => res.json()).then(data => {
        console.log(data)
         setTodos([...todos,data]);
         setNewTodo("") 
    })
   }


    
  return (
    <div>
        <input type="text" placeholder="add todos here" onChange={handleChange}/>
        <button onClick={saveInfo}>+</button>
        {todos.map(el=> (
            <div key={el.id}>{el.text}</div>
            // <div>{console.log(el)}</div>
        ))}
    </div>
  )
}

export default Todo