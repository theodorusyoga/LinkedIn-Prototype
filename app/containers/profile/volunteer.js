import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaChevronDown } from 'react-icons/lib/fa'
import UserActivity from '../components/useractivity'

const Volunteer = ({ user }) => {
    return (
        <div className="card-body py-0 px-0 mx-3 my-3">
            <h5 className="card-title">Volunteer Experience</h5>
            <div className="row">
                <div className="col-9">
                    <UserActivity type="volunteer" iconType="job" user={user} />
                </div>
            </div>
            <div className="icon">
                <a className="text-info" href="#">
                    Show more&nbsp;<FaChevronDown size={10} />
                </a>
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
)(Volunteer)