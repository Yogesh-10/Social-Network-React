import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/user'
import { db } from '../../firebase'
import './style.css'

const CommentInput = ({ id, comments }) => {
	const [user, setUser] = useContext(UserContext).user
	const [comment, setComment] = useState('')
	const [commentArray, setCommentsArray] = useState(comments ? comments : [])

	const addComment = () => {
		// add comment to post info
		if (comment !== '') {
			commentArray.push({
				comment: comment,
				username: user.displayName,
			})

			db.collection('posts').doc(id).update({
				comments: commentArray,
			})

			setComment('')
		}
	}
	return (
		<div className='commentInput'>
			<textarea
				className='commentInput__textarea'
				placeholder='Enter a comment...'
				rows='1'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			></textarea>

			<button onClick={addComment} className='commentInput_btn'>
				Post
			</button>
		</div>
	)
}

export default CommentInput
