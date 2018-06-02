import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaCaretDown } from 'react-icons/lib/fa'
import TimelineCard from '../components/timelinecard'

const Timeline = (props) => {
    return (
        <div className="timeline-cards py-3">
            <div className="row">
                <div className="col-10">
                    <hr />
                </div>
                <div className="col-2 px-0 py-0">
                    <p><small>Sort by:&nbsp;
									<span className="font-weight-bold">Top&nbsp;<FaCaretDown /></span></small></p>
                </div>
            </div>
            <TimelineCard />
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
)(Timeline)