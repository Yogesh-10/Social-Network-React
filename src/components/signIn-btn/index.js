import React, { useContext } from 'react'
import { UserContext } from '../../context/user'
import { signInWithGoogle } from '../../services/auth'
import './style.css'

const SignInButton = () => {
	const [user, setUser] = useContext(UserContext).user

	const signInClick = async () => {
		const userBySignIn = await signInWithGoogle()

		if (userBySignIn) setUser(userBySignIn)

		console.log(userBySignIn)
	}

	return (
		<div className='signInBtn' onClick={signInClick}>
			<p>Sign in with Google</p>
		</div>
	)
}

export default SignInButton
