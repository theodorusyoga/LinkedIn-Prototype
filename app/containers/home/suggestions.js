import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/user'
import { FaInfoCircle, FaPlus } from 'react-icons/lib/fa'

const Suggestions = ({ searchResults }) => {
    return (
        <div className="card py-3 px-3 mb-3">
            <div className="card-title">
                <div className="row">
                    <div className="col-9">
                        <h6>Add to your feed</h6>
                    </div>
                    <div className="col-3 text-right align-middle">
                        <h6><FaInfoCircle /></h6>
                    </div>
                </div>
            </div>
            <div className="card-body px-0 py-0">
                {
                    searchResults.map((user, index) => (
                        <div key={index} className="row">
                            <div className="col-8">
                                <User user={user} />
                            </div>
                            <div className="col-4 text-right">
                                <button className="btn btn-outline-dark btn-sm btn-rectangle"><FaPlus/>&nbsp;Follow</button>
                            </div>
                        </div>
                    ))
                }
                <a className="text-info" href="#">
                    <small className="font-weight-bold">View All Recommendations</small>
                </a>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { searchResults } = state.search
    return {
        searchResults
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Suggestions)