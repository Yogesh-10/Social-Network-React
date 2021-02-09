import React from 'react'

const Comment = ({ username, caption }) => {
	return (
		<div className='container'>
			<p>
				<span style={{ fontWeight: '500', marginRight: '4px' }}>
					{username}
				</span>
				{caption}
			</p>
		</div>
	)
}

export default Comment
