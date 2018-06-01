import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileLeft from './profileLeft'
import CreatePost from './createPost'

const Home = (props) => {
	return (
		<div className="container py-4">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-3">
					<ProfileLeft />
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6">
					<CreatePost />
				</div>
				<div className="col-sm-12 col-md-12 col-lg-3">
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)