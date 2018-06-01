import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showSearchBox } from '../../modules/search'
import $ from 'jquery'

class SearchBox extends React.Component{
    constructor(props){
        super(props)
    }

    setBoxPosition(){
        const parent = $('#search-box').parent()
        if(parent.length > 0){
            const top = parent.position().top
            const height = parent.height()
            $('#search-box').css({ top: (top+height) })
        }
    }

    handleSearchBoxClose(e, props) {
        const { showSearchBox } = props

        if($(e.target).hasClass('form-control') || $(e.target).hasClass('list-group-item') 
            || $(e.target).parent().hasClass('list-group-item') ||  $(e.target).hasClass('list-group') 
            || $(e.target).parent().hasClass('list-group')){
            return
        }

        showSearchBox(false)
    }

    componentDidMount(){
        document.addEventListener('click', (e) => {
            this.handleSearchBoxClose(e, this.props)
        });
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleSearchBoxClose)
    }

    componentDidUpdate(){
        this.setBoxPosition()
    }

    render(){
        const { isSearchBoxShown } = this.props

        if(isSearchBoxShown){
            return (
                <ul id="search-box" className="list-group">
                    <li className="list-group-item active">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            )
        }
        else {
            return ''
        }
    }
}

const mapStateToProps = state => {
    const { isSearchBoxShown } = state.search
    return {
        isSearchBoxShown
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    showSearchBox
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox)