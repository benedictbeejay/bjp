import React from 'react'
import Me from '../images/me.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-veryDarkGrey'>
      <div className=' flex flex-cols justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 sm:px-8 grid sm:grid-cols-2 sm:gap-4 gap-8'>
            <div className='sm:my-16 my-4 mt-16 mx-auto sm:w-full w-1/2 sm:p-4 p-4 rounded-lg hover:scale-110 duration-300 shadow-md shadow-veryDarkBlue'>
                <h1 className='text-sand md:text-4xl text-3xl flex text-center sm:text-right'>Hi,</h1> <br/>
                <p className='text-cream md:text-2xl flex  text-left'>I am Benedict Olanipekun,<br/>
			          and welcome to<br className=''/> BeeJay's Photography</p>
            </div>

             <div className='flex justify-center items-center duration-300'>
              <img alt='#' src={Me}  className='rounded-lg hover:scale-110 duration-300 w-1/2 flex justify-center items-center mx-auto'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home