import React from 'react'
import SignInButton from '../../components/signIn-btn'
import './style.css'

const Navbar = () => {
	return (
		<div className='navbar'>
			<p>Social Network</p>
			<SignInButton />
		</div>
	)
}

export default Navbar
