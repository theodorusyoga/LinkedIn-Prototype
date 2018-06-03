import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const TimelineContent = ({ content }) => {
    if(content.type == 'link'){
        return (
            <div className="card-link card py-0 my-0">
                <img className="card-img-top" src={content.image} alt={content.link} />
                <div className="card-body">
                    <p className="mb-0 card-text">{content.caption}</p>
                    <p className="mb-0 text-muted"><small>{content.link}</small></p>
                </div>
            </div>
        )
    }
   else if(content.type == 'text'){
       return (
           <p>{content.text}</p>
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
)(TimelineContent)