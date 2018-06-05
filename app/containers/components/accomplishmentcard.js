import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaChevronDown } from 'react-icons/lib/fa'

const AccomplishmentCard = ({ index, value }) => {
    return (
        <div>
            <div key={index} className="row">
                <div className="card-user-image col-2 col-sm-2 col-md-2 col-lg-2 pr-0 pt-1 text-center">
                    <h1 className="text-info">{value.count}</h1>
                </div>
                <div className="card-user-details col-10 col-sm-10 col-md-10 col-lg-10 pl-0 mb-3">
                    <p className="font-weight-bold mb-0 mt-1 text-info">{value.type}</p>
                    {
                        value.content.map((text, index) => (
                            <small key={index}>{
                                index > 0 ? ' ' : ''
                            }
                                {text}
                                &nbsp;
                                        {
                                    index < value.content.length - 1 ? (<span>&bull;</span>) : ''
                                }</small>
                        ))
                    }
                </div>
                <hr />
            </div>
        </div>
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
)(AccomplishmentCard)