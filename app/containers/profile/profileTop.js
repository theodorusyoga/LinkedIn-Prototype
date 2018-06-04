import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaChevronDown } from 'react-icons/lib/fa'
import UserDetail from '../components/userdetail'

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
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 mb-2">
                        <h6 className="card-title font-weight-bold my-1">{user.fullname}</h6>
                        <p className="card-text my-1"><small>{user.tagline}</small></p>
                        <p className="card-text text-muted"><small>{user.country}</small></p>
                        <button className="btn btn-sm btn-info btn-rectangle mr-1">Connect</button>
                        <button className="btn btn-sm btn-outline-info btn-rectangle mr-1">InMail</button>
                        <button className="btn btn-sm btn-outline-dark btn-rectangle">More...</button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        {
                            user.details.map((value, index) => (
                                <UserDetail key={index} data={value} />
                            ))
                        }
                    </div>
                </div>
                <hr />
                <div className="summary">
                    <small>{user.summary}</small>
                </div>
                <hr />
                <div className="text-center">
                    <a className="text-info" href="#">
                        <small className="align-middle">Show More&nbsp;<FaChevronDown size={10} />
                        </small>
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
)(ProfileTop)