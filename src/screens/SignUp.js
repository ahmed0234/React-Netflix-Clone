import React, { useRef } from 'react'
import './SignUp.css'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const SignUp = () => {


    const emailRef=useRef(null);
    const passwordRef=useRef(null);




    function register(e) {
            e.preventDefault();

          createUserWithEmailAndPassword(
            auth,
                emailRef.current.value,
                passwordRef.current.value
            ).then((authuser)=>{
                    console.log(authuser);
            }).catch(err=> alert(err.message))

    }

    const signIn=(e)=>{
            e.preventDefault();
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((user)=>{console.log(user);}).catch(err=>alert(err))

    }
  return (
    <div className='SignUpScreen'>
        <div className="heaver__container">

   

    

                <form>
                        <h1>Sign In</h1>
                        <div className='SignUp__container'>
                                <input ref={emailRef} type="email"  placeholder='Email'/>
                                <input ref={passwordRef} type="password" placeholder='Password' />
                                <button type='submit' onClick={signIn}>Sign In</button>
                                <h4><em>New to Netflix? </em><span className='a' onClick={register}>Sign Up</span></h4>
                        </div>
                </form>

              
        
                </div>
    </div>
  )
}

export default SignUp