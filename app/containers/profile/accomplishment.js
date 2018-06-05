import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AccomplishmentCard from '../components/accomplishmentcard'

const Accomplishment = ({ user }) => {
    return (
        <div id="profile-top" className="card mb-3">
            <div className="card-body">
                <h5 className="card-title mb-3">Accomplishments</h5>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                        {
                            user.accomplishments.map((value, index) => (
                                <div key={index}>
                                    <AccomplishmentCard value={value} />
                                </div>
                            ))
                        }
                    </div>
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
)(Accomplishment)