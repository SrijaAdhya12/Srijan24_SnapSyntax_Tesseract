import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import '../styles/Home.css'
import Hero from '../Sections/Hero'

const Home = () => {
	return (
		<div className="mx-auto flex items-center flex-wrap 0 p-6 max-w-screen-xl justify-center">
			<Hero />
		</div>
	)
}

export default Home
