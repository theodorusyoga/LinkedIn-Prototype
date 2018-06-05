import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaChevronDown, FaQuestionCircleO, FaCog } from 'react-icons/lib/fa'

const Footer = ({ index, value }) => {
    return (
        <footer className="border-top">
            <div className="row pt-3 pb-1">
                <div className="col-12">
                    <img className="mb-2" src="/images/logo_wide.png" alt="LinkedIn" />
                </div>
            </div>
            <div className="row pt-2 pb-5">
                <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="text-dark" href="#">About</a></li>
                        <li className="mb-1"><a className="text-dark" href="#">Careers</a></li>
                        <li className="mb-1"><a className="text-dark" href="#">Advertising</a></li>
                        <li className="mb-1"><a className="text-dark" href="#">Mobile</a></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="text-dark" href="#">Talent Solutions</a></li>
                        <li className="mb-1"><a className="text-dark" href="#">Marketing Solutions</a></li>
                        <li className="mb-1"><a className="text-dark" href="#">Sales Solutions</a></li>
                        <li className="mb-1"><a className="text-dark" href="#">Small Businesses</a></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="text-dark" href="#">Community Guidelines</a></li>
                        <li className="mb-1"><a className="text-dark" href="#">Privacy &amp; Terms&nbsp;<FaChevronDown size={10} /></a></li>
                        <li className="mb-1"><a className="text-dark" href="#">Send Feedback</a></li>
                        <li className="mb-1"><a className="text-dark" href="#">Safety Center</a></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-3 col-md-3 col-lg-3">
                    <ul className="list-unstyled text-small">
                        <li className="mb-3">
                            <div className="row">
                                <div className="col-2 text-info">
                                    <FaQuestionCircleO size={35} />
                                </div>
                                <div className="col-10">
                                    <p className="mb-0">Questions?</p>
                                    <a href="#" className="text-muted">Visit our Help Center</a>
                                </div>
                            </div>
                        </li>
                        <li className="mb-1">
                            <div className="row">
                                <div className="col-2 text-info">
                                    <FaCog size={35} />
                                </div>
                                <div className="col-10">
                                    <p className="mb-0">Manage your account and privacy.</p>
                                    <a href="#" className="text-muted">Go to your Settings</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
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
)(Footer)