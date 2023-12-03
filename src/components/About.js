import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-lightGrey'>
        <div className=' flex flex-col w-full h-full px-8 p-4  mx-auto justify-center items-center'>
            <div className='max-w-[1000px] flex flex-col gap-4 p-4 duration-300 shadow-md rounded-md hover:scale-110 bg-veryDarkGrey shadow-veryDarkBlue'>
                <h2 className='text-sand text-2xl'>About Me</h2>
                <p className='text-cream'>
                    Hi, I'm Benedict Olanipekun. I'm a Mobile Photographer who enjoys the thrill of capturing moments.<br/> 
                    I am also a Web developer and a Computer science student of the University of Ilorin, Kwara state, Nigeria. <br/> 
                    I employ the use of my mobile phone and editing applications to create beautiful images.<br/> Allow me to take you through my portfolio and show you my best works.<br />
                </p>
            </div>    
        </div>
    </div>
  )
}

export default About
