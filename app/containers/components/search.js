import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchBox from '../components/searchbox'
import { FaSearch } from 'react-icons/lib/fa'
import { showSearchBox } from '../../modules/search'

const Search = ({ showSearchBox }) => {
    return (
        <form className="search-form">
            <div className="input-group">
                <input onFocus={() => { showSearchBox(true) }} type="text" 
                    className="form-control" id="search-text" placeholder="Search" />
                <div className="input-group-prepend">
                    <div className="input-group-text icon">
                        <FaSearch />
                    </div>
                </div>
                <SearchBox/>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return { }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    showSearchBox
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)