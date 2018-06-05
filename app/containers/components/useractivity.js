import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaBuildingO, FaBook, FaBriefcase } from 'react-icons/lib/fa'
import { MdPeople } from 'react-icons/lib/md'
import userdetail from './userdetail';

const selectIcon = (type) => {
    switch (type) {
        case 'education':
            return <FaBuildingO size={45} />
        case 'contact':
            return <FaBook />
        case 'people':
            return <MdPeople />
        case 'job':
            return <FaBriefcase size={45} />
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
                    <p className="font-weight-bold mb-0 mt-1">{user.job.position}</p>
                    <p className="mb-0"><small>{user.job.name}</small></p>
                    <p><small className="text-muted mb-0 mt-1">{user.job.time}</small></p>
                    <p><small className="text-muted mb-0 mt-1">{user.job.details}</small></p>
                </div>
            </div>
        )
    }
    else if (type == 'education') {
        return (
            <div>
                {
                    user.educations.map((value, index) => (
                        <div key={index} className="row">
                            <div className="card-user-image col-2 col-sm-2 col-md-2 col-lg-2 pr-0 pt-1">
                                {selectIcon(iconType)}
                            </div>
                            <div className="card-user-details col-10 col-sm-10 col-md-10 col-lg-10 pl-0">
                                <p className="font-weight-bold mb-0 mt-1">{value.position}</p>
                                <p className="mb-0"><small>{value.name}</small></p>
                                <p><small className="text-muted mb-0 mt-1">{value.time}</small></p>
                                <p><small className="text-muted mb-0 mt-1">{value.details}</small></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
    else if (type == 'volunteer') {
        return (
            <div>
                {
                    user.volunteers.map((value, index) => (
                        <div key={index} className="row">
                            <div className="card-user-image col-2 col-sm-2 col-md-2 col-lg-2 pr-0 pt-1">
                                {selectIcon(iconType)}
                            </div>
                            <div className="card-user-details col-10 col-sm-10 col-md-10 col-lg-10 pl-0">
                                <p className="font-weight-bold mb-0 mt-1">{value.position}</p>
                                <p className="mb-0"><small>{value.name}</small></p>
                                <p><small className="text-muted mb-0 mt-1">{value.time}</small></p>
                                <p><small className="text-muted mb-0 mt-1">{value.details}</small></p>
                            </div>
                        </div>
                    ))
                }
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