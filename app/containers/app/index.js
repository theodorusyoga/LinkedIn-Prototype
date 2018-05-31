import React from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../components/header'
import Home from '../home'

const App = () => (
	<div>
		<Header/>
		<main>
			<Route exact path="/" component={Home}/>
		</main>
	</div>
)

export default App