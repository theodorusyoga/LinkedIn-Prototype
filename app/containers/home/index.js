import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setStartTime, setEndTime, setAndStartCountdown, forceStopCountdown, clearMessageError } from '../../modules/countdown'
import Header from '../components/header'

const Home = (props) => {
	return (
		<div>
			This is home!
		</div>
	)
}

const mapStateToProps = state => {
	const { startTime, endTime, countdown, startTimeErrorMsg, 
		endTimeErrorMsg, errorMsg } = state.countdown
	return{
		startTime,
		endTime,
		countdown,
		startTimeErrorMsg,
		endTimeErrorMsg,
		errorMsg
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setStartTime,
	setEndTime,
	setAndStartCountdown,
	forceStopCountdown,
	clearMessageError
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)