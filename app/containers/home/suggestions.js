import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaInfoCircle } from 'react-icons/lib/fa'

const Suggestions = (props) => {
    return (
        <div className="card py-3 px-3 mb-3">
            <div className="card-title">
                <div className="row">
                    <div className="col-9">
                        <h6>Add to your feed</h6>
                    </div>
                    <div className="col-3 text-right align-middle">
                        <FaInfoCircle />
                    </div>
                </div>
            </div>
            <div className="card-body px-0 py-0 pt-1">

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Suggestions)