import React, { useState } from 'react'

const Stopwatch = () => {
    const [watch, setWatch]= useState(0)
    const [timerId,setTimerId]= useState()
    
    const start= ()=>{

        if(!timerId){
            let id= setInterval(()=>{
                setWatch((pre)=>pre+1)
            },1000)
            setTimerId(id)
        }

      
    }

    const stop =()=>{
      clearInterval(timerId)
    }

    const reset = ()=>{
        clearInterval(timerId)
        setWatch(0)
    }
  return (
    <div>
        <h1>Stopwatch</h1>
       <h2>{watch}</h2> 
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch