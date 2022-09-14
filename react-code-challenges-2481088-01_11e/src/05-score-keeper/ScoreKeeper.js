import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const [score, setScore] = useState(parseInt(localStorage.getItem("score")) || 0)
  useEffect(()=>{
    localStorage.setItem("score", score)
  },[score])
  const decreaseNum = ()=>{
    if (score > 0){
      setScore(prevScore=> prevScore - 1)
    } else{
      setScore(0)
    }
  }
  return (
    <div>
      <h1>Your score is: {score}</h1> 
      <button onClick={()=>setScore(prevScore=>prevScore + 1)}>+</button>
      <button onClick={decreaseNum}>-</button>
    </div>
  )
}
