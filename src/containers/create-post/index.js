import React from 'react'
import SignInButton from '../../components/signIn-btn'
import './style.css'

const CreatePost = () => {
	return (
		<div className='createPost'>
			<SignInButton />
			<p style={{ marginLeft: '12px' }}>to create post & comments</p>
		</div>
	)
}

export default CreatePost
