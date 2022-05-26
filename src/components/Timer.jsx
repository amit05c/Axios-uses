import React,{useState,useEffect} from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(5)
   


   useEffect(()=>{
        const id= setInterval(()=>{
            if(timer<1){
                clearInterval(id)
            }else{

                setTimer(timer-1)
            }
        },1000) 

        return ()=>{
            clearInterval(id)
        }

    
 },[timer])
    
    
  return (
    // <div>{timer}</div>

    <div>
        {/* count: {timer} */}
        
    </div>
  )
}

export default Timer