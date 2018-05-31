import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaSearch } from 'react-icons/lib/fa'

const Search = (props) => {
    return (
        <form className="search-form">
            <div className="input-group">
                <input type="text" className="form-control" id="search-text" placeholder="Search" />
                <div className="input-group-prepend">
                    <div className="input-group-text icon">
                        <FaSearch />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Search