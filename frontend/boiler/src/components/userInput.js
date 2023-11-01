import React, { useState } from 'react'

const UserInput = (props) => {
  const setuserValue=props.setuserValuefxn
  const [textinput,settextinput]=useState()
  const handleSubmit=(e)=>{
    e.preventDefault();
    setuserValue(textinput)
  }
  return (
   <>
   <div className='p-5'>
    <form action="#" className='max-w-[600px]'>
   
       
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea value={textinput} onChange={(e)=>{settextinput(e.target.value)}} id="message" rows="7" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
<button onClick={handleSubmit} type="submit" className="my-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Publish post
   </button>
    </form>

   </div>
   </>
  )
}

export default UserInput