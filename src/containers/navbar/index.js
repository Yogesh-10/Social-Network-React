import React, { useContext } from 'react'
import SignInButton from '../../components/signIn-btn'
import { UserContext } from '../../context/user'
import './style.css'

const Navbar = () => {
	const [user, setUser] = useContext(UserContext).user
	return (
		<div className='navbar'>
			<h4>Social Network</h4>
			{user ? (
				<img className='navbar__img' src={user.photoURL} />
			) : (
				<SignInButton />
			)}
		</div>
	)
}

export default Navbar
