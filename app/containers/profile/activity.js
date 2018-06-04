import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaPlus } from 'react-icons/lib/fa'
import { MdChatBubbleOutline, MdPeopleOutline } from 'react-icons/lib/md'
import UserActivity from '../components/useractivity'

const Activity = ({ user }) => {
    return (
        <div id="profile-top" className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <h5 className="card-title my-0">{user.fullname}'s Activity</h5>
                        <p><small className="text-muted">{user.followers} followers</small></p>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-sm btn-outline-info btn-rectangle"><FaPlus />&nbsp;Follow</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <UserActivity type="user" user={user} />
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
)(Activity)