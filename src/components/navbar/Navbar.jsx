import React from 'react'
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <span className='text'>ArtAlley</span><span className='dot'>.</span>
            </div>
            <div className="links">
                <ul className='links-list'>
                    <li className='links-list__item'>
                        <a href="#" className='link'>Your Business</a>
                    </li>
                    <li className='links-list__item'>
                        <a href="" className='link'>For you</a>
                    </li>
                    <li className='links-list__item'>
                        <a href="" className='link'>English</a>
                    </li>
                    <li className='links-list__item'>
                        <a href="" className='link'>Sign in</a>
                    </li>
                    <li className='links-list__item'>
                        <a href="" className='link'>Become a Seller</a>
                    </li>
                    <a href="#">join</a>
                </ul>
            </div>
        </div>
    </div>
  )
}
