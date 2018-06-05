import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Job from './job'
import Education from './education'
import Volunteer from './volunteer'

const Experience = (props) => {
    return (
        <div id="profile-top" className="card mb-3">
            <Job />
            <hr />
            <Education />
            <hr/>
            <Volunteer />
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
)(Experience)