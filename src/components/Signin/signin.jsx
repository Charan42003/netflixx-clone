import React from 'react'
import './signin.css'
import logo from '../../assets/logo.png'
import banner from '../../assets/bannerimg.jpg'
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <>
    <div className={`container`}>
        <header className='headersign'>
            <img src={ banner } alt='banner'/>
            <div className='dark'/>
            <nav>
                <div className="logo">
                    <Link to='/'>
                        <img src={ logo } alt="logo"style={{position: 'absolute', left: '4%'}} />
                    </Link>
                </div>
            </nav>
            <main className='signin_main'>
                <div className='form'>
                    <h2>Sign In</h2>
                    <input type="text" placeholder='Email or phone number'/>
                    <input type="text" placeholder='Password'/>
                    <Link to='/home'>
                        <button to='/home' className='signinn'>Sign In</button>
                    </Link>
                    <div className="cont">
                        <div className="check">
                            <input type="checkbox" name="Remember me" id="checkbox" value={'Remember me'} style={{marginRight: '5px'}}/> Remember me
                        </div>
                        <a className='forgotPass' href='https://www.netflix.com/LoginHelp'>
                            Need help?
                        </a>
                    </div>
                    <p className='newSignup'>New to Netflix? <Link to="/">Sign up now</Link></p>
                    <p className='desc'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more</span>.</p>
                </div>
            </main>
        </header>
    </div>
</>
  );

}

export default Signin