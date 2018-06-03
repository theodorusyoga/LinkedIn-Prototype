import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/header'
import Home from '../home'
import Profile from '../profile'

const App = () => (
	<div>
		<Header/>
		<main>
			<Route exact path="/" component={Home}/>
			<Route exact path="/profile" component={Profile} />
		</main>
	</div>
)

export default App