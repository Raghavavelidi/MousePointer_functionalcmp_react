import React, { useEffect, useState } from 'react'

function FunctionMousePointer() {
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);

    const logMousePointer =(e)=>{
        setx(e.clientX);
        sety(e.clientY);
    }
    useEffect(()=>{
        console.log('use effect called');
        window.addEventListener('mousemove',logMousePointer)

    },[])
  return (
    <div>
        X -{x}<br />
        Y -{y}
    </div>
  )
}

export default FunctionMousePointer