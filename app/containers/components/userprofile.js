import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const UserProfile = ({ user }) => {
    return (
        <div className="row">
            <div className="card-user-image col-5 col-sm-5 col-md-3 col-lg-3 pr-0 pt-1">
                <img className="rounded-circle" src={user.pic} width={40} height={40} alt={name} />
            </div>
            <div className="card-user-details col-7 col-sm-7 col-md-9 col-lg-9 pl-0">
                <p className="mb-0"><small className="font-weight-bold">{user.fullname}</small>&nbsp;
                    <small className="text-muted">&bull;&nbsp;1st</small></p>
                <p><small className="text-muted mb-0 mt-1">{user.tagline}</small></p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile)