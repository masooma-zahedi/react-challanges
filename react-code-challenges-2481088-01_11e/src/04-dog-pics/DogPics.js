import { useEffect, useState } from 'react'

// https://dog.ceo/api/breeds/image/random
const getDogImg = async()=>{
  const response = await fetch(" https://dog.ceo/api/breeds/image/random")
  const dogPic = await response.json()
  const dogPicSrc = dogPic.message;
  // console.log(dogPicSrc);
  return dogPicSrc;
}

export default function DogPics () {
  const [dogNew , setDogNew] = useState("")
  useEffect(()=>{
    getDogImg().then(pic=>setDogNew(pic))
    console.log(dogNew);
  },[])
  return (
    <>
    <h1>************* New Project</h1>
    <div className='dog-pics'>
      <img src={dogNew} />
      <button onClick={async e =>setDogNew(await getDogImg())} >🐶</button>
    </div>
    </>
  )
}
