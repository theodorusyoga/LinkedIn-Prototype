import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showSearchBox } from '../../modules/search'
import $ from 'jquery'
import SearchItem from './searchitem'

class SearchBox extends React.Component {
    constructor(props) {
        super(props)
    }

    setBoxPosition() {
        const parent = $('#search-box').parent()
        if (parent.length > 0) {
            const height = parent.height()
            $('#search-box').css({ top: height })

            if($(window).width() <= 420){
                const width = parent.width()
                $('#search-box').css({ 'min-width': width })
            }
        }
    }

    handleSearchBoxClose(e, props) {
        const { showSearchBox } = props

        if ($(e.target).hasClass('form-control') || $(e.target).hasClass('list-group-item')
            || $(e.target).parent().hasClass('list-group-item') || $(e.target).hasClass('list-group')
            || $(e.target).parent().hasClass('list-group') || $(e.target).parent().hasClass('list-group-item-div')) {
            return
        }

        showSearchBox(false)
    }

    componentDidMount() {
        document.addEventListener('click', (e) => {
            this.handleSearchBoxClose(e, this.props)
        });
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleSearchBoxClose)
    }

    componentDidUpdate() {
        this.setBoxPosition()
    }

    render() {
        const { isSearchBoxShown, searchOptions, searchResults } = this.props

        if (isSearchBoxShown) {
            return (
                <div id="search-box" className="list-group">
                    <div className="list-group-item flex-column align-items-start">
                        <div className="list-group-item-title d-flex w-100 justify-content-between">
                            <small className="font-weight-bold">Search for</small>
                        </div>
                        {
                            searchOptions.map((value, index) => (
                                <SearchItem key={index} type="menu" name={value}
                                    link={'/' + name} />
                            ))
                        }
                    </div>
                    <div className="list-group-item flex-column align-items-start">
                        <div className="list-group-item-title d-flex w-100 justify-content-between">
                            <div class="row">
                                <div class="col-6">
                                    <small className="font-weight-bold">Recent</small>
                                </div>
                                <div class="col-6 text-right">
                                    <a href="#"><small>Clear</small></a>
                                </div>
                            </div>

                        </div>
                        {
                            searchResults.map((person, index) => (
                                <SearchItem key={person.id} type="person" name={person.name}
                                    img={person.image} link={'/' + name} />
                            ))
                        }
                    </div>
                </div>
            )
        }
        else {
            return ''
        }
    }
}

const mapStateToProps = state => {
    const { isSearchBoxShown, searchOptions, searchResults } = state.search
    return {
        isSearchBoxShown,
        searchOptions,
        searchResults
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    showSearchBox
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox)