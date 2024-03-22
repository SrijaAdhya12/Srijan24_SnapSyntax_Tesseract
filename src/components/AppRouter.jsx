import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, Login } from '../pages'
// import { Contributors, Feedback, Home, RateUs } from '../pages'

const AppRouter = () => {
	const location = useLocation()
	return (
		<Routes {...location}>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			{/* <Route path="/rateus" element={<RateUs />} />
			<Route path="/contributors" element={<Contributors />} />
			<Route path="/feedback" element={<Feedback />} /> */}
		</Routes>
	)
}

export default AppRouter
