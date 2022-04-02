import React, { useState } from 'react'
import Getapi from './Getapi'
import Paggination from './Paggination'
export default function Posts() {
    const [getposts,setposts]=useState(Getapi)
    const[showperpage,setperpage]=useState(4)
    const [paggination,setpaggination]=useState({
        start:0,
        end:showperpage
    })
 const OnPagginationChange=(start,end)=>{
   setpaggination({start:start,end:end})
 }
  return (
    <>
    <div className='container py-3'>
    <div className='row'>
    {
        getposts.slice(paggination.start,paggination.end).map((post)=>(
            <div className='col-md-3 py-3' key={post.id}>
                <div className='card'>
                    <div className='card-body'>
                        <h5>#{post.id}{post.title}</h5>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
           
    
    
    ))
      }</div>
       <Paggination showperpage={showperpage} OnPagginationChange={OnPagginationChange}/>
    </div>
    </>
  )
}
