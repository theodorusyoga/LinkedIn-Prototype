import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaBuildingO, FaBook } from 'react-icons/lib/fa'
import { MdPeople } from 'react-icons/lib/md'

const selectIcon = (type) => {
    switch (type) {
        case 'education':
            return <FaBuildingO />
        case 'contact':
            return <FaBook />
        case 'people':
            return <MdPeople />
        default:
            return ''
    }
}

const UserDetails = ({ data }) => {
    return (
        <div>
            { selectIcon(data.type) }
            &nbsp;&nbsp;
            <small>{data.text}</small>
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
)(UserDetails)