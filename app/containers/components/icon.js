import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaHome, FaBriefcase, FaBellO, FaUser } from 'react-icons/lib/fa'
import { MdPeople, MdMessage, MdMenu } from 'react-icons/lib/md'

const selectIcon = (type) => {
    switch (type) {
        case 'Home':
            return (<FaHome size={22} />)
        case 'My Network':
            return (<MdPeople size={22} />)
        case 'Jobs':
            return (<FaBriefcase size={22} />)
        case 'Messaging':
            return (<MdMessage size={22} />)
        case 'Notifications':
            return (<FaBellO size={22} />)
        case 'Me':
            return (<FaUser size={22} />)
        case 'Work':
            return (<MdMenu size={22} />)
        default:
            return ('')
    }
}

const Icon = ({ data }) => {
    return (
        <Link to={data.link == undefined ? '/' : data.link} className="navbar-menu-item text-center text-light">
            <div className="navbar-menu-icon">
                {selectIcon(data.name)}
            </div>
            <div className="text-small">
                <small>{data.name}</small>
            </div>
        </Link>
    )
}

export default Icon