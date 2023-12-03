import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Nav = () => {
    const [nav, setNav] = useState(false) 
    const handleClick = () => setNav(!nav)
    let toggleMenu = !nav ? 'hidden' : '';
    let slide = !nav ? 'w-0' : 'w-full'
     return (
    <div className='fixed w-full text-bold z-10 text-lightGrey h-16 flex justify-between items-center bg-veryDarkBlue'>
        <div>
            <ul className='sm:flex px-16 space-x-4 hidden '>
                <li className='border-b-2 border-b-transparent duration-500 cursor-pointer hover:border-sand'> <Link 
                    activeClass="active" 
                    to="home" 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    >
                    Home
                    </Link>
                </li>
                <li className='border-b-2 cursor-pointer border-b-transparent duration-500 hover:border-sand'>
                    <Link 
                        activeClass="active" 
                        to="about"  
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                       
                        >
                    About
                    </Link>
                </li>
                <li className='border-b-2 cursor-pointer border-b-transparent duration-500 hover:border-sand'>
                    <Link 
                        activeClass="active" 
                        to="project"  
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                       
                        >
                    Projects
                    </Link>
                </li>
                <li className='border-b-2 cursor-pointer border-b-transparent duration-500 hover:border-sand'>
                    <Link 
                        activeClass="active" 
                        to="contact"  
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                       
                        >
                    Contact
                    </Link>
                </li>
            </ul>
        </div>

        <div className='sm:hidden flex px-4 duration-200 text-lightGrey z-20'  onClick={handleClick}>
            {!nav ? <FaBars className=' duration-200' /> : <FaTimes className=' duration-200' />}
        </div>  

        <ul className={`${toggleMenu} absolute ${slide} fixed duration-300 h-screen top-0 left-0 flex  bg-veryDarkBlue/90 flex-col justify-center items-center space-y-4 text-xl`}>
            <li className='border-b-2 cursor-pointer border-b-transparent duration-500 hover:border-sand'> <Link 
                    activeClass="active" 
                    to="home" 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    onClick={handleClick}
                    >
                    Home
                    </Link>
            </li>
            <li className='border-b-2 cursor-pointer border-b-transparent duration-500 hover:border-sand'>
                 <Link 
                        activeClass="active" 
                        to="about"  
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        onClick={handleClick}                       
                        >
                    About
                    </Link>
            </li>
            <li className='border-b-2 cursor-pointer border-b-transparent duration-500 hover:border-sand'>
               <Link 
                        activeClass="active" 
                        to="project"  
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                       onClick={handleClick}
                        >
                    Projects
                    </Link>  
            </li>
            <li className='border-b-2 cursor-pointer border-b-transparent duration-500 hover:border-sand'>
                <Link 
                        activeClass="active" 
                        to="contact"  
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        onClick={handleClick}
                        >
                    Contact
                    </Link>
            </li>
        </ul>  
    </div>
  )
}

export default Nav
