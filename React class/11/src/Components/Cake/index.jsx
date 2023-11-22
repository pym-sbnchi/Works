import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from '../../Store/Slices/cakeSlice'

export default function Cake() {
  const [inp,setInp]=useState(1)
  const {cake} = useSelector(state=> state.cake)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>number of cake : {cake}</h2>
      <button className='btn btn-danger' onClick={()=>{
        if(cake < +inp){
          alert ('input number is not valid')
        }else{
          dispatch(remove(+inp))
        }
      }}>-</button>
      <input className='mx-2' type="number" onChange={(e)=>setInp(e.target.value)} value={inp}/>
      <button className='btn btn-success' onClick={()=>dispatch(add(+inp))}>+</button>
    </div>
  )
}
