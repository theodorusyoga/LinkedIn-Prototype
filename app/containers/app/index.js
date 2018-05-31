import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'

const App = () => (
	<div>
		{/* ONLY USED WHEN ROUTING IS ENABLED */}
		<main>
			<Route exact path="/" component={Home}/>
		</main>
	</div>
)

export default App