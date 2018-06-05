import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaChevronDown } from 'react-icons/lib/fa'
import UserActivity from '../components/useractivity'

const Job = ({ user }) => {
    return (
        <div className="card-body mb-0">
            <h5 className="card-title mb-3">Experience</h5>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                    <UserActivity type="experience" iconType="job" user={user} />
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
)(Job)