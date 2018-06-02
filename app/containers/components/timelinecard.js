import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MdMoreHoriz, MdThumbUp, MdComment } from 'react-icons/lib/md'
import { FaShareSquareO } from 'react-icons/lib/fa'
import TimelineContent from './timelinecontent'

const TimelineCard = ({ content }) => {
    return (
        <div className="card py-3 px-3 mb-3">
            <div className="row">
                <div className="card-user-image col-3 col-sm-2 col-md-2 col-lg-2 pr-0">
                    <img className="rounded-circle" src={content.user.image} width={50} height={50} alt={content.user.fullname} />
                </div>
                <div className="card-user-details col-7 col-sm-9 col-md-9 col-lg-9 pl-0">
                    <p className="mb-0"><small className="font-weight-bold">{content.user.fullname}</small></p>
                    <p className="mb-0"><small className="text-muted mb-0">{content.user.tagline}</small></p>
                    <p><small className="text-muted mb-0">{content.date}</small></p>
                </div>
                <div className="col-1">
                    <MdMoreHoriz size={24} />
                </div>
            </div>
            <TimelineContent content={content.content} />
            <div className="card-body px-0 py-0 pt-1">
                <p className="card-text text-muted">
                    <small>
                        {content.likes <= 0 ? '' :
                            (content.likes > 1 ? content.likes + ' Likes' : '1 Like')}
                    </small>
                </p>
                <hr />
                <div className="card-actions">
                    <a className="mr-3 text-muted" href="#"><MdThumbUp />&nbsp;Like</a>
                    <a className="mr-3 text-muted" href="#"><MdComment />&nbsp;Comment</a>
                    <a className="mr-3 text-muted" href="#"><FaShareSquareO />&nbsp;Share</a>
                </div>
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
)(TimelineCard)