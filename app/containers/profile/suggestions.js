import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserProfile from '../components/userprofile'
import { FaInfoCircle, FaPlus } from 'react-icons/lib/fa'

const Suggestions = ({ searchResults }) => {
    return (
        <div className="py-3 px-3">
            <div className="mb-3">
                <h6>People Also Viewed</h6>
            </div>
            <div className="px-0 py-0">
                <div className="row">
                    <div className="col-10">
                        {
                            searchResults.map((user, index) => (
                                <UserProfile key={index} user={user} />
                            ))
                        }
                    </div>
                </div>
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