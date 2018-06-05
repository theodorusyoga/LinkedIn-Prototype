import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserProfile from '../components/userprofile'

const Interests = ({ searchResults }) => {
    return (
        <div id="profile-top" className="card mb-3">
            <div className="card-body">
                <h5 className="card-title mb-3">Interests</h5>
                <div className="row">
                    {
                        searchResults.map((user, index) => (
                            <div key={index} className="col-6 px-3 py-2">
                                <UserProfile key={index} user={user} />
                            </div>
                        ))
                    }
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
)(Interests)