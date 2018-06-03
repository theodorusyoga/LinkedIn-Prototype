import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaCaretDown } from 'react-icons/lib/fa'
import TimelineCard from '../components/timelinecard'

const Timeline = ({ timeline }) => {
    return (
        <div className="timeline-cards py-3">
            <div className="row px-3">
                <div className="col-8 col-sm-9 col-md-9 col-lg-9 px-0">
                    <hr />
                </div>
                <div className="col-4 col-sm-3 col-md-3 col-lg-3 px-0 py-0 text-right">
                    <p><small>Sort by:&nbsp;
									<span className="font-weight-bold">Top&nbsp;<FaCaretDown /></span></small></p>
                </div>
            </div>
            {
                timeline.map((content, index) => (
                    <TimelineCard key={index} content={content} />
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    const { timeline } = state.timeline
    return {
        timeline
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timeline)