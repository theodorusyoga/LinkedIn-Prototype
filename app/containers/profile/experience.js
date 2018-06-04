import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaPlus } from 'react-icons/lib/fa'
import { MdChatBubbleOutline, MdPeopleOutline } from 'react-icons/lib/md'
import UserActivity from '../components/useractivity'

const Experience = ({ user }) => {
    return (
        <div id="profile-top" className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Experience</h5>
                <div className="row">
                    <div className="col-9">
                        <UserActivity type="experience" iconType="education" user={user} />
                    </div>
                </div>
                <hr />
                <div className="icon">
                    <a className="text-info" href="#">
                        See all activity
                    </a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { user } = state.home
    return {
        user
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Experience)