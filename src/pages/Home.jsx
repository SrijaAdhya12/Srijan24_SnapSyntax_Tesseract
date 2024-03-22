import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import '../styles/Home.css'

const Home = () => {
	return (
		<div className="text-black text-4xl">
			<h1>Home</h1>
			<div className="flex gap-3">
				<FontAwesomeIcon icon={faHouse} />
				<button className="bg-green-500 font-body2">Hello</button>
			</div>
		</div>
	)
}

export default Home
