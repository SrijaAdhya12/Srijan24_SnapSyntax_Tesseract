const Navbar = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap 0 p-6 max-w-screen-xl mx-auto">
			<div className="flex gap-10  uppercase">
				<div className="flex items-center flex-shrink-0">
					<span className="font-semibold text-xl tracking-tight">lorem epsem</span>
				</div>
				<div className="flex items-center flex-shrink-0 mr-6">
					<span className="font-semibold text-xl tracking-tight">About</span>
				</div>
				<div className="flex items-center flex-shrink-0 mr-6">
					<span className="font-semibold text-xl tracking-tight">work</span>
				</div>
			</div>
			<div className="flex gap-10">
				<div className="flex items-center flex-shrink-0 uppercase">
					<span className="font-semibold text-xl tracking-tight">LET's CONNECT</span>
				</div>
				<div className="flex items-center flex-shrink-0 mr-6">
					<span className="font-semibold text-xl tracking-tight">info@jamelaeBrown.com</span>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
