import React from 'react'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import './BeforeLog.css'
import logo from '../../assets/logo.png'
import banner from '../../assets/bannerimg.jpg'
import device from '../../assets/device-show.png'
import tv from '../../assets/tv.png'
import mobile from '../../assets/mobile-0819.jpg'
import child from '../../assets/children.png'
import video1 from '../../assets/homepage videos/video-tv-in-0819.mp4'
import video2 from '../../assets/homepage videos/video-devices-in.mp4'

function BeforeLog() {
  return (
    <>
        <div className="container">
            <header className='headerLog'>
                <img src={ banner } alt='banner'/>
                <div className='dark'/>
                <nav>
                    <div className="logo">
                        <Link to='/'>
                            <img src={ logo } alt="logo" className='position'/>
                        </Link>
                    </div>
                    <div className="buttons">
                        <details>
                            <summary>Language <i className="fa-solid fa-globe"></i></summary>
                            <a href="#">English</a>
                            <a href="#">Hindi</a>
                            <a href="#">Telugu</a>
                            <a href="#">Kannada</a>
                        </details>
                        <Link className='signin' to='/signin'>Sign In</Link>
                    </div>
                </nav>
                <main className='before_main'>
                    <h1 className='title'>
                        Unlimited movies, TV shows and more
                    </h1>
                    <p className="tagline">Watch anywhere. Cancel anytime.</p>
                    <p className="label">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='email-form'>
                        <input type="text" name="email" id="email" placeholder='Email address' />
                        {/* <Link to='/home' className="get_started"> */}
                            <Link className="get_started" to='/home'>
                                    Get Started <i class="fa-solid fa-chevron-right"></i>
                            </Link>
                        {/* </Link> */}
                    </div>
                </main>
            </header>
            <div className="section__A">
                <div className="content content1">
                    <div className="text__area">
                        <h1>Enjoy on your TV</h1>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className="display">
                        <img src={ tv } alt="" />
                        <ReactPlayer 
                            url={ video1 }
                            playing={true} 
                            loop={true} 
                            controls={false}
                            className="video1" 
                        />
                    </div>
                </div>
                <div className="content content2">
                    <div className="display">
                        <img src={ mobile } alt="" />
                    </div>
                    <div className="text__area">
                        <h1>Download your shows to watch offline</h1>
                        <p>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
                <div className="content content3">
                    <div className="text__area">
                        <h1>Watch everywhere</h1>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="display">
                        <img src={ device } alt="" />
                        <ReactPlayer 
                            url={ video2 }
                            playing={true} 
                            loop={true} 
                            controls={false}
                            className="video2" 
                        />
                    </div>
                </div>
                <div className="content content4">
                    <div className="display">
                        <img src={ child } alt="" />
                    </div>
                    <div className="text__area">
                        <h1>Create profiles for kids</h1>
                        <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
            </div>
            <div className="td">
                <p className="label centerp">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='email-form pad'>
                    <input type="text" name="email" id="email" placeholder='Email address' />
                    {/* <Link to='/home'className="get_started"> */}
                        <Link className="get_started" to='/home'>
                            Get Started <i class="fa-solid fa-chevron-right"></i>
                        </Link>
                    {/* </Link> */}
                </div>
            </div>
            <footer>
                Cloned By Charan Raj
            </footer>
        </div>
    </>
  )
}

export default BeforeLog