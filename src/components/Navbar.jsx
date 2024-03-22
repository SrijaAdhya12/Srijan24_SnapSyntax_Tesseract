import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
	return (
		<nav className="bg-gray-600 flex h-10 items-center text-white justify-end p-4">
			<div className="flex gap-5 justify-between w-full">
				<a href="/">LOGO</a>
				<div className="flex gap-3 items-center">
					<button className="cursor-pointer">Sign Up</button>
					<FontAwesomeIcon icon={faBars} className="cursor-pointer" />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
