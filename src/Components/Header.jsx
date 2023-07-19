import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import '../styles/header.css'

import profilePic from '../assets/icons/profile.png'
import { Context } from '../assets/Context'

function Header(props) {
  const { SERVER_URL } = useContext(Context)
  const [profileSubMenu, setProfileSubMenu] = useState(false)


  return (
    <header >
      <nav onClick={() => {if(profileSubMenu) setProfileSubMenu(false)}}>
        <div className='ulNavbar'>
          <ul>
            {props.user.email && (props.user.role == 'admin' || props.user.role == 'manager') && <li ><Link className='dashboard' to={'/dashboard/analytics'}>Admin Dashboard</Link></li>}
            <li><Link to={'/properties'}>Buy</Link></li>
            <li><Link to={'/'}>Sell</Link></li>
          </ul>
        </div>
        <div className='logoDiv'>
          <h1 className='logo'><Link to={'/'}>Logo</Link></h1>
        </div>
        <div className='ulNavbar'>
          <ul>
            <li><Link to={'/properties'}>Map</Link></li>
            {!props.user.email && <li className='signUpButton' onClick={() => props.setSignInModalOpen(true)}><button>Sign In</button></li>}
            {props.user.email && <li className='profileItem'>
              <p className={`profile ${props.user.image ? 'imageSet' : ''}`}>
                <Link className='profilePicItem' onClick={() => setProfileSubMenu(prevValue => !prevValue)}>
                  <img className='profilePic' src={props.user.image ? `${SERVER_URL}/images/${props.user.image}` : profilePic} alt="" />
                </Link>
              </p>
              {profileSubMenu &&
                <>
                  <aside className='profileSubMenu'>
                    <ul>
                      <li><Link to={'/profile/accountSettings'}>Account Settings</Link></li>
                      <li><Link to={'/profile/favoriteProperties'}>Favorite Properties</Link></li>
                      <li><Link to={'/profile/yourProperties'}>Your Properties</Link></li>
                    </ul>
                    <hr />
                    <button className='logOutButton' onClick={() => {
                      props.setUser()
                      props.changeSuccessMessage('Succesfully signed out!')
                    }}>Sign Out</button>
                  </aside>
                </>
              }
            </li>}
          </ul>
        </div>
      </nav>
      {/* Background to close the submenu when click outside it */}
      {profileSubMenu &&<div className='backgroundSubmenu' onClick={() => setProfileSubMenu(false)}></div>}
    </header >
  )
}

export default Header