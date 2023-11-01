import React, { useState } from 'react'

const UserInput = (props) => {
  const setuserValue=props.setuserValuefxn
  const loading=props.loading
  const [textinput,settextinput]=useState()
  const handleSubmit=(e)=>{
    e.preventDefault();
    setuserValue(textinput)
  }
  return (
   <>
   <div className='p-5 md:px-10'>
    <form action="#" className='max-w-[600px]'>
   
       
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea value={textinput} onChange={(e)=>{settextinput(e.target.value)}} id="message" rows="7" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
{loading}
<button disabled={loading} onClick={handleSubmit} type="submit" className="disabled:opacity-70 disabled:hover:bg-blue-700 my-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg active:scale-[0.9] hover:bg-blue-800 transition-all ease-in-out">
       Publish post
   </button>
    </form>

   </div>
   </>
  )
}

export default UserInput