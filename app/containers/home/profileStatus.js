import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaLock } from 'react-icons/lib/fa'

const ProfileStatus = ({ view, connections, isPremium }) => {
    return (
        <div className="list-group list-group-flush">
            <div className="list-group-item text-center py-3 px-3">
                <h4 className="text-info mb-0">{view}</h4>
                <small className="text-muted px-1">Who's viewed your profile</small>
            </div>
            <div className="list-group-item text-center py-3 px-3">
                <h4 className="text-info mb-0">{connections}</h4>
                <p className="mb-0"><small className="text-muted px-1">Connections</small></p>
                <small><a href="#" className="font-weight-bold text-dark">Manage your network</a></small>
            </div>
            {
                isPremium ? '' : (
                    <div className="list-group-item text-center py-3 px-3 bg-light">
                        <p className="mb-0"><small className="text-muted px-1">Access exclusive tools &amp; insights</small></p>
                        <small className="align-middle"><FaLock />&nbsp;
                        <a href="#" className="font-weight-bold text-dark">Free Upgrade to Premium</a>
                        </small>
                    </div>
                )
            }
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
)(ProfileStatus)