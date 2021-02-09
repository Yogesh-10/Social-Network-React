import React, { useContext } from 'react'
import Comment from '../../components/comments'
import { UserContext } from '../../context/user'
import './style.css'

const Post = ({ profileUrl, username, id, photoUrl, caption, comments }) => {
	return (
		<div className='post'>
			<div className='post__header'>
				<div className='post__headerLeft'>
					<img src={profileUrl} className='post__profilePic' />
					<p style={{ marginLeft: '8px' }}>{username}</p>
				</div>
				<button className='post__delete'>Delete</button>
			</div>

			<div className='post__center'>
				<img className='post__photoUrl' src={photoUrl} />
			</div>

			<div>
				<p>
					<span style={{ fontWeight: '500', marginRight: '4px' }}>
						{username}
					</span>
					{caption}
				</p>
			</div>

			{comments ? (
				comments.map((comment) => (
					<Comment username={comment.username} caption={comment.comment} />
				))
			) : (
				<></>
			)}
		</div>
	)
}

export default Post
