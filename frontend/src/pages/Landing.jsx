import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='flex flex-col items-center justify-start min-h-screen my-10'>
        <div className='flex flex-col mx-10 mt-44 text-center border-4 border-purple-500 p-10 rounded-3xl  '>
          <h1 className='text-5xl font-semibold sm:text-8xl
                          bg-gradient-to-r bg-clip-text  text-transparent 
                          from-indigo-500 via-purple-500 to-indigo-500
                          animate-text'>☰nunciate</h1>
          <p className='text-2xl py-2'>A tool to help you practice your social skills</p>
        </div>
        <button className='shadow-xl bg-gradient-to-br from-purple-500 to-indigo-400 hover:bg-indigo-700 text-white font-bold py-4 px-4 rounded-full mt-16 text-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-90 hover:shadow-2xl focus:outline-none'
          onClick={() => {
            // go to login page
            navigate('/login')
          }}
        >
          Get Started
        </button>

      </div>

      <div className='flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-purple-500 to-indigo-200 py-12'>
        <div className='flex flex-col mx-10 mt-12 text-center p-10 rounded-3xl backdrop:blur-sm bg-white bg-opacity-20 shadow-2xl'>
          <h1 className='text-4xl font-bold p-2'>How it works</h1>
          <p className='text-2xl p-2'>Enunciate will help you practice your social skills by giving you a daily goal to work on. You can also use the chatbot to practice your conversation skills.Enunciate will help you practice your social skills by giving you a daily goal to work on. You can also use the chatbot to practice your conversation skills.Enunciate will help you practice your social skills by giving you a daily goal to work on. You can also use the chatbot to practice your conversation skills.Enunciate will help you practice your social skills by giving you a daily goal to work on. You can also use the chatbot to practice your conversation skills.</p>
        </div>
      </div>

      <div className='flex flex-col items-center justify-start min-h-screen'>
        <div className='flex flex-col mx-10 mt-12 text-center p-10 rounded-3xl  '>
          <h1 className='text-6xl font-semibold text-purple-500 '>About Us</h1>
          <p className='text-2xl py-2'>Get in contact and share your feedback with us!</p>

          {/* maker image, name and role beside */}
          <div className='flex flex-row justify-center items-center p-6'>
            <img className='rounded-full h-16 w-16 m-4' src='https://avatars.githubusercontent.com/u/47044065?v=4' alt='profile' />
            <div className='flex flex-col justify-start text-start'>
              <h1 className='text-2xl font-semibold'>Siddharth</h1>
              <p className='text-xl'>Frontend Developer</p>
            </div>
          </div>
          {/* maker image, name and role beside */}
          <div className='flex flex-row justify-center items-center p-6'>
            <img className='rounded-full h-16 w-16 m-4' src='https://avatars.githubusercontent.com/u/47044065?v=4' alt='profile' />
            <div className='flex flex-col justify-start text-start'>
              <h1 className='text-2xl font-semibold'>Siddharth</h1>
              <p className='text-xl'>Frontend Developer</p>
            </div>
          </div>

          {/* maker image, name and role beside */}
          <div className='flex flex-row justify-center items-center p-6'>
            <img className='rounded-full h-16 w-16 m-4' src='https://avatars.githubusercontent.com/u/47044065?v=4' alt='profile' />
            <div className='flex flex-col justify-start text-start'>
              <h1 className='text-2xl font-semibold'>Siddharth</h1>
              <p className='text-xl'>Frontend Developer</p>
            </div>
          </div>
          {/* maker image, name and role beside */}
          <div className='flex flex-row justify-center items-center p-6'>
            <img className='rounded-full h-16 w-16 m-4' src='https://avatars.githubusercontent.com/u/47044065?v=4' alt='profile' />
            <div className='flex flex-col justify-start text-start'>
              <h1 className='text-2xl font-semibold'>Siddharth</h1>
              <p className='text-xl'>Frontend Developer</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Landing