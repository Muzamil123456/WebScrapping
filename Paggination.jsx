import React, { useEffect, useState } from 'react'

export default function Paggination({showperpage,OnPagginationChange}) {
    const[counter,setCounter]=useState(1);
    const total=30;
    useEffect(()=>{
        const value=showperpage*counter;
        OnPagginationChange(value-showperpage,value)
    },[counter])
    const OnButtonClick=(type)=>{
     if(type==='pre')
     {
        if(counter===1)
        {
            setCounter(1);
        }
        else
        {
            setCounter(counter-1);
        }
     }
     else if(type==='next')
     {
           if(Math.ceil(total/showperpage)===counter)
           {
               setCounter(counter)
           }
           else
           {
               setCounter(counter+1)
           }
     }
    }
  return (
    <>
    <div className='d-flex justify-content-between'>
    <button className='btn btn-primary'onClick={()=>OnButtonClick('pre')}>Previous</button>
    <button className='btn btn-primary' onClick={()=>OnButtonClick('next')}>Next</button>
    </div>
    </>
  )
}
