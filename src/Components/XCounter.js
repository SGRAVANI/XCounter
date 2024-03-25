import React from 'react'
import styles from "./styles.module.css"
import { useState } from 'react'
export default function XCounter() {
    let [c,setC]=useState(0)
  return (
    <div className={styles.container}>
       
            <h1 className={styles.counterHeading}>Counter App</h1>
            <p className={styles.counterDisplay}>Count: {c}</p>
            <div className={styles.btn}>
                <button onClick={()=>setC((prev)=>prev+1)}>Increment</button>
                <button onClick={()=>{
                    setC((prev)=>prev-1)
                }}>Decrement</button>
            </div>
      
    </div>
  )
}
