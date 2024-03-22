import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import AboutUs from '../Sections/AboutUs'
import Work from '../Sections/Work'
import Hero from '../Sections/Hero'
import '../styles/Home.css'

const Home = () => {
	return (
		<div className="mx-auto flex items-center flex-wrap 0 p-6 max-w-screen-xl justify-center">
			<Hero />
			<AboutUs />
			<Work />
		</div>
	)
}

export default Home
