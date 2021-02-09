import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import React, { useContext, useState } from 'react'
import SignInButton from '../../components/signIn-btn'
import { UserContext } from '../../context/user'
import { db, storage } from '../../firebase'
import makeid from '../../helpers/functions'
import firebase from 'firebase'
import './style.css'

const CreatePost = () => {
	const [user, setUser] = useContext(UserContext).user
	const [caption, setCaption] = useState('')
	const [image, setImage] = useState(null)
	const [progess, setProgress] = useState(0)

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0])

			var selectedImagesrc = URL.createObjectURL(e.target.files[0])

			var imagePreview = document.getElementById('image-preview')

			imagePreview.src = selectedImagesrc
			imagePreview.style.display = 'block'
		}
	}

	const handleUpload = () => {
		if (image) {
			const imageName = makeid(10)
			const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image)

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					// progress bar for uploading image
					const progress = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					)

					setProgress(progress)
				},
				(error) => {
					console.log(error)
				},
				() => {
					// get download url and upload post info

					storage
						.ref('images')
						.child(`${imageName}.jpg`)
						.getDownloadURL()
						.then((imageUrl) => {
							db.collection('posts').add({
								timestamp: firebase.firestore.FieldValue.serverTimestamp(),
								caption: caption,
								photoUrl: imageUrl,
								username: user.email.replace('@gmail.com', ''),
								profileUrl: user.photoURL,
							})
						})
				}
			)
		}
	}

	return (
		<div className='createPost'>
			{user ? (
				<div className='createPost__loggedIn'>
					<p>Create New Post</p>
					<div className='createPost__loggedInCenter'>
						<textarea
							placeholder='Enter caption here...'
							className='createPost__textarea'
							rows='3'
							value={caption}
							onChange={(e) => setCaption(e.target.value)}
						></textarea>
						<div className='createPost__imagePreview'>
							<img id='image-preview' alt='' />
						</div>
					</div>

					<div className='createPost__loggedInBottom'>
						<div className='createPost__imageUpload'>
							<label htmlFor='fileInput'>
								<AddAPhotoIcon
									style={{ cursor: 'pointer', fontSize: '20px' }}
								/>
							</label>
							<input
								id='fileInput'
								type='file'
								accept='image/*'
								onChange={handleChange}
							/>
						</div>
						<button
							className='createPost__uploadBtn'
							style={{ color: caption ? '#000' : 'lightgrey' }}
							onClick={handleUpload}
						>
							{`Upload ${progess !== 0 ? progess : ''}`}
						</button>
					</div>
				</div>
			) : (
				<div>
					<SignInButton />
					<p style={{ marginLeft: '12px' }}>to create post & comments</p>
				</div>
			)}
		</div>
	)
}

export default CreatePost
