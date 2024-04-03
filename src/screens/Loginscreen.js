import React, { useState } from 'react'
import './Loginscreen.css'
import SignUp from './SignUp'

const Loginscreen = () => {

const [signIn, setSignIn] = useState(false)

  return (
    <div className='loginScreen'>

                    <div className="loginscreennav">
                            <img 
                            className='loginScreen__logo'
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                             alt="Netflix-logo" />
                             <button className='LoginScreen_button' onClick={()=>setSignIn(true)}>Sign In</button>
                    </div>

                  {signIn? (
                    <SignUp />
                  ): (

                    <>
                    <div className="hero">
                    <h1 className="hero-title-text">Unlimited movies, TV shows, and more</h1>
                    <h2 className="hero_description">Watch anywhere. Cancel anytime.</h2>
                    <h3 className="hero_footer_text">
                        Ready to watch? Enter your email to create or restart your
                        membership.
                    </h3>
                    <div className="hero_email_section">

                    <form className='form_1'>
                        <input
                                className="hero_input"
                                type="email"
                                placeholder="Email Address"
                                />
                                <button className="primary_btn hero_btn" onClick={()=> setSignIn(true)}>
                                Get Started <em className="em"></em>
                                </button>

                    </form>
                        
                             </div>
                    </div>
                    </>
                  )
                  }
          

       

    </div>
  )
}

export default Loginscreen