import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar2.png'
import { Link } from 'react-router-dom'

function NavBar() {
    const [navColor, setNavColor] = useState(false)
    const [display, setDisplay] = useState(false)
    const transitionNav = () => {
        if(window.scrollY > 100) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    }
    const displaynav = () => {
        if(window.scrollY > 550) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', displaynav);
        return () => window.removeEventListener('scroll', displaynav)
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', transitionNav);
        return () => window.removeEventListener('scroll', transitionNav)
    }, [])
    return (
        <>
            <div className='nav__container'>
                <div className={`nav__wrapper ${navColor && 'nav__black'} ${display && 'hidden'}`}>
                    <div className="logo">
                        <Link to='/'>
                            <img src={ logo } alt="logo" />
                        </Link>
                    </div>
                    <div className="avatar">
                        <img src={ avatar } alt="avatar" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar