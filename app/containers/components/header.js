import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Search from './search'
import Icon from './icon'
import Bootstrap from 'bootstrap'

const Header = ({ menu, menuSecondary }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container d-flex justify-content-between">
                <a className="navbar-brand" href="/">
                    <img src="/images/logo.png" width={30} height={30} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#linkedin-header"
                    aria-controls="linkedin-header" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="linkedin-header">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Search />
                    </ul>
                    <div className="navbar-menu-group">
                        <div className="navbar-menu mr-md-auto mr-md-3">
                            {
                                menu.map((value, index) => (
                                    <Icon key={index} data={value} />
                                ))
                            }
                        </div>
                        <div className="navbar-menu mr-md-auto mr-md-3">
                            {
                                menuSecondary.map((value, index) => (
                                    <Icon key={index} data={value} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    const { menu, menuSecondary } = state.home
    return {
        menu,
        menuSecondary
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)