import React, { useContext } from 'react'
import SignInButton from '../../components/signIn-btn'
import { UserContext } from '../../context/user'
import './style.css'

const Navbar = () => {
	const [user, setUser] = useContext(UserContext).user
	return (
		<div className='navbar'>
			<p>Social Network</p>
			{user ? (
				<img className='navbar__img' src={user.photoURL} />
			) : (
				<SignInButton />
			)}
		</div>
	)
}

export default Navbar
