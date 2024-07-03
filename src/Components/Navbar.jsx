import React from 'react'
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav>
        <a href="">
            <img src="./assests/whatsapp-icon.png" alt="" />
        </a>

        <ul className='nav-links'>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Testimonials</a>
            </li>
            <li>
                <a href="">Projects</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>

        <div className="butn">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
