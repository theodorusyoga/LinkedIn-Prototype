import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const User = ({ user }) => {
    return (
        <div className="row">
            <div className="card-user-image col-4 col-sm-4 col-md-4 col-lg-4 pr-0">
                <img className="rounded-circle" src={user.pic} width={40} height={40} alt={name} />
            </div>
            <div className="card-user-details col-8 col-sm-8 col-md-8 col-lg-8 pl-0">
                <p className="mb-0"><small className="font-weight-bold">{user.fullname}</small></p>
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
)(User)