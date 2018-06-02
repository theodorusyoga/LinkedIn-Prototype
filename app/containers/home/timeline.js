import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaCaretDown } from 'react-icons/lib/fa'
import TimelineCard from '../components/timelinecard'

const Timeline = ({ timeline }) => {
    return (
        <div className="timeline-cards py-3">
            <div className="row">
                <div className="col-8 col-sm-10 col-md-10 col-lg-10">
                    <hr />
                </div>
                <div className="col-4 col-sm-2 col-md-2 col-lg-2 px-0 py-0">
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