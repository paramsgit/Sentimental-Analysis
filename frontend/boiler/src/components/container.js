import React, { useEffect, useState } from 'react'
import UserInput from './userInput'
import Result from './result'

const Container = () => {
  const [userValue,setuserValue]=useState("Hello welcome. How are you.")
  const [loading,setloading]=useState(false)
  const [result,setresult]=useState()
  useEffect(() => {
    getAnalysis();
  }, [userValue])
  
  const getAnalysis=async()=>{
   
    if(userValue!=="Hello welcome. How are you.")
   { setloading(true) 
    try {
      const rawResponse = await fetch('http://127.0.0.1:5000/analysis', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"message":userValue})
      });
      const content = await rawResponse.json();
      console.log(content)
      setresult(content)
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }}
 
  }

  return (
    <div className="flex flex-col md:flex-row justify-center">
        <div className="left w-full md:w-[60%]">
            <UserInput setuserValuefxn={setuserValue} loading={loading}/>
        </div>
        <div className="right w-full md:w-[30%]">
        <Result result={result}/>
        </div>
    </div>
  )
}

export default Container