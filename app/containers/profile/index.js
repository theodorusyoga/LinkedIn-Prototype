import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileTop from './profileTop'
import Suggestions from './suggestions'
import Highlights from './highlights'
import Activity from './activity'
import Experience from './experience'
import Accomplishment from './accomplishment'
import Interests from './interests'

const Profile = (props) => {
    return (
        <div className="container py-2">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8">
                    <ProfileTop />
                    <Highlights />
                    <Activity />
                    <Experience />
                    <Accomplishment />
                    <Interests/>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <Suggestions/>
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
)(Profile)