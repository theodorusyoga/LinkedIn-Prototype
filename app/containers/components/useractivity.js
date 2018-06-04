import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaBuildingO, FaBook } from 'react-icons/lib/fa'
import { MdPeople } from 'react-icons/lib/md'

const selectIcon = (type) => {
    switch (type) {
        case 'education':
            return <FaBuildingO size={45} />
        case 'contact':
            return <FaBook />
        case 'people':
            return <MdPeople />
        default:
            return ''
    }
}

const UserActivity = ({ type, iconType, user }) => {
    if (type == 'user') {
        return (
            <div className="row">
                <div className="card-user-image col-2 col-sm-2 col-md-2 col-lg-2 pr-0">
                    <img className="rounded-circle" src={user.pic} width={50} height={50} alt={name} />
                </div>
                <div className="card-user-details col-10 col-sm-10 col-md-10 col-lg-10 pl-0">
                    <p className="mb-0"><small>{user.activity}</small></p>
                    <p><small className="text-muted mb-0 mt-1">{user.fullname}&nbsp;shared this</small></p>
                </div>
            </div>
        )
    }
    else if (type == 'experience') {
        return (
            <div className="row">
                <div className="card-user-image col-2 col-sm-2 col-md-2 col-lg-2 pr-0 pt-1">
                    {selectIcon(iconType)}
                </div>
                <div className="card-user-details col-10 col-sm-10 col-md-10 col-lg-10 pl-0">
                    <p className="mb-0"><small>{user.activity}</small></p>
                    <p><small className="text-muted mb-0 mt-1">{user.fullname}&nbsp;shared this</small></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserActivity)