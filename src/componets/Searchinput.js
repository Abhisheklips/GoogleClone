"use client"
import React ,{useState}from 'react'
import {AiOutlineSearch }from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { data } from 'autoprefixer'
const Searchinput = () => {
    const [input,setInput] = useState("")
    const router = useRouter()
    const [loding,setLoding] = useState(false)
    // form
    const handlesubmit = (e)=>{
        e.preventDefault()
        // console.log(input)
        router.push(`/search/web?searchTeam=${input}`)
    }

// iam feel lucky
const handluckybtn =async() =>{
  setLoding(true)
  // random word api
  const res = await fetch("https://random-word-api.herokuapp.com/word")
  .then(res=> res.json())
  .then(data=>data[0])
  setLoding(false)
  if(!res) return 
  router.push(`/search/web?searchTeam=${res}`)

}


  return (
    <>
      <form    onSubmit={handlesubmit}
       
      className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus:within:shadaw-md sm:max-w-xl lg:max-w-xl">
        <AiOutlineSearch  className="text-xl text-gray-500 mr-3"/>
        <input type="text"  className='flex-grow focus:outline-none'
         value={input}
         onChange={(e)=>{setInput(e.target.value)}}
        />
        <BsFillMicFill className="text-xl"/>
        
      </form>
      <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row my-8'>
      <button className='btn font-semibold' onClick={handlesubmit}>Google Search</button>
    <button className='btn font-semibold' onClick={handluckybtn}>{loding?'loding ...':`I'm Felling Lucky`}</button>

      </div>
    </>
  )
}

export default Searchinput
