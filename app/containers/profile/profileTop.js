import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ProfileTop = ({ user }) => {
    return (
        <div id="profile-top" className="card mb-3">
            <div className="card-img-top-div card-img-top-profile">
                <img className="card-img-top" src={user.cover} alt={user.username} />
            </div>
            <div className="card-pic ml-4">
                <img className="rounded-circle" src={user.pic} width={75} height={75} alt={name} />
            </div>
            <div className="card-body pt-1">
                <div className="row">
                    <div className="col-6">
                        <h6 className="card-title font-weight-bold my-1">{user.fullname}</h6>
                        <p className="card-text text-muted my-1"><small>{user.tagline}</small></p>
                        <p className="card-text text-muted"><small>{user.country}</small></p>
                    </div>
                    <div className="col-6">
                    </div>
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
)(ProfileTop)