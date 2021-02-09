import React, { useContext } from 'react'
import CommentInput from '../../components/comment-input'
import Comment from '../../components/comments'
import { UserContext } from '../../context/user'
import { db, storage } from '../../firebase'
import './style.css'

const Post = ({ profileUrl, username, id, photoUrl, caption, comments }) => {
	const [user, setUser] = useContext(UserContext).user
	const deletePost = () => {
		// delete image from firebase storage

		// get ref to image to delete
		const imageRef = storage.refFromURL(photoUrl)

		// after fetting ref delete file
		try {
			imageRef.delete()
		} catch (error) {
			console.log(error)
		}

		// delete post info from firebase firestore
		db.collection('posts').doc(id).delete()
	}

	return (
		<div className='post'>
			<div className='post__header'>
				<div className='post__headerLeft'>
					<img src={profileUrl} className='post__profilePic' />
					<p style={{ marginLeft: '8px' }}>{username}</p>
				</div>
				{user && (
					<button onClick={deletePost} className='post__delete'>
					</button>
				)}
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

			{user ? <CommentInput id={id} comments={comments} /> : <></>}
		</div>
	)
}

export default Post
