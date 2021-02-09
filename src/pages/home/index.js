import { CreatePost, Navbar } from '../../containers'
import Feed from '../../containers/feed'
import './style.css'

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<CreatePost />
			<Feed />
		</div>
	)
}

export default Home
