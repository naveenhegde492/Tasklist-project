import React from 'react'
import Logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <header>
        <div className="logo">
                <img src={Logo} alt="TaskMate Logo" />
                <span>TaskMate</span>
        </div>
        <span className="themeSelector">
                <span className="light"></span>
                <span className="medium"></span>
                <span className="dark"></span>
                <span className="gOne"></span>
                <span className="gTwo"></span>
                <span className="gThree"></span>
            </span>
    </header>
  )
}
