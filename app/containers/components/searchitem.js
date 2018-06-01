import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MdPeople, MdReceipt } from 'react-icons/lib/md'
import { FaBriefcase } from 'react-icons/lib/fa'

const selectIcons = (name) => {
    switch (name) {
        case 'People':
            return <MdPeople />
        case 'Jobs':
            return <FaBriefcase />
        case 'Posts':
            return <MdReceipt />
        default:
            return ''
    }
}

const SearchItem = ({ type, name, link, img }) => {
    if (type == 'menu') {
        return (
            <div className="menu-link mb-2 mt-2">
                <small>
                    <span className="icon icon-menu">{selectIcons(name)}</span>
                    <span className="align-middle">{name}</span>
                </small>
            </div>
        )
    }
    else if (type == 'person') {
        return (
            <div className="menu-link mb-2 mt-2">
                <small>
                    <span className="icon icon-menu">
                        <img src={img} class="rounded-circle" width={20} height={20} alt={name} />
                    </span>
                    <span className="align-middle">{name}</span>
                </small>
            </div>
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
)(SearchItem)