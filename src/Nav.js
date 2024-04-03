import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {

     const [show, setshow] = useState(false)
     const transitionNavbar=()=>{
        if(window.scrollY>80){
            setshow(true)
        }else{setshow(false)}
     }

     useEffect(() => {
                window.addEventListener("scroll", transitionNavbar )
                return ()=> window.removeEventListener('scroll', transitionNavbar)
     }, [])
     
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">

            <img 
            className='nav__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="" />

            <img
            className='nav__avatar'
            src="https://tosfrit.es/wp/wp-content/uploads/2017/01/cropped-Favicon.png"
            alt="" />
        </div>
    
    </div>
  )
}

export default Nav