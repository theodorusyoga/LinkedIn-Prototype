import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header'

const Home = (props) => {
	return (
		<div>
			This is home!
		</div>
	)
}

const mapStateToProps = state => {
	return{
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)