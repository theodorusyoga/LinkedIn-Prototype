import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileStatus from './profileStatus'

const ProfileLeft = ({ user }) => {
    return (
        <div id="profile-left" className="card mb-3">
            <div className="card-img-top-div">
                <img className="card-img-top" src={user.cover} alt={user.username} />
            </div>
            <div className="card-pic">
                <img className="rounded-circle" src={user.pic} width={75} height={75} alt={name} />
            </div>
            <div className="card-body text-center pt-1">
                <h6 className="card-title font-weight-bold my-1">{user.fullname}</h6>
                <p className="card-text text-muted"><small>{user.tagline}</small></p>
            </div>
            <ProfileStatus view={40} connections={500} isPremium={false}/>
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
)(ProfileLeft)