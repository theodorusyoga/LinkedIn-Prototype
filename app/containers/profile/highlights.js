import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaChevronDown } from 'react-icons/lib/fa'
import { MdChatBubbleOutline, MdPeopleOutline } from 'react-icons/lib/md'

const Highlights = ({ user }) => {
    return (
        <div id="profile-top" className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Highlights</h5>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12 col-sm-2 col-md-2 col-lg-2">
                                <MdPeopleOutline size={55} />
                            </div>
                            <div className="col-12 col-sm-10 col-md-10 col-lg-10">
                                <p className="my-0"><small>100 mutual connections</small></p>
                                <p className="my-0"><small className="text-muted">You and {user.fullname} know 100 friends</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12 col-sm-2 col-md-2 col-lg-2">
                                <MdChatBubbleOutline size={55} />
                            </div>
                            <div className="col-12 col-sm-10 col-md-10 col-lg-10">
                                <p className="my-0"><small>Reach out {user.fullname} for...</small></p>
                                <p className="my-0"><small className="text-muted">Joining a nonprofit</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center icon">
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
)(Highlights)