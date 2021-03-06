import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/user'
import { FaPencil, FaCamera, FaVideoCamera } from 'react-icons/lib/fa'
import { toggleCreatePost } from '../../modules/home'
import $ from 'jquery'

class CreatePost extends React.Component {
    constructor(props) {
        super(props)
    }

    handleCreatePostClose(e, props) {
        const { toggleCreatePost } = props

        if ($(e.target).hasClass('form-control') || $(e.target).hasClass('card-title') ||
            $(e.target).parent().hasClass('card-title') || $(e.target).parent().parent().hasClass('card-title') ||
            $(e.target).parent().hasClass('card-user-image') || $(e.target).parent().hasClass('card-user-details') ||
            $(e.target).parent().hasClass('card-body') || $(e.target).parent().parent().hasClass('card-body') ||
            $(e.target).parent().hasClass('card-button')) {
            return
        }

        toggleCreatePost(false)
    }

    componentDidMount() {
        document.addEventListener('click', (e) => {
            this.handleCreatePostClose(e, this.props)
        });
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleCreatePostClose)
    }

    render() {
        const { isCreatePostEnabled, user, toggleCreatePost } = this.props
        return (
            <div id="create-post" className="card">
                <div className="card-body">
                    {
                        isCreatePostEnabled ? (
                            <div className="card-title my-2">
                                <div className="row">
                                    <div className="col-8 col-sm-6 col-md-6 col-lg-6">
                                        <User user={user} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group mb-0">
                                            <textarea className="form-control" id="post-text" rows="3"
                                                placeholder="Write here or use @ to mention someone"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) :
                            (
                                <p onClick={() => { toggleCreatePost(true) }}
                                    className="card-title text-muted my-2 cursor-pointer">
                                    Share an article, photo, video, or idea
                            </p>
                            )
                    }
                </div>
                <div className="list-group list-group-flush">
                    <div className="list-group-item py-2 px-2">
                        <div className="row">
                            <div className="card-button col-sm-0 col-md-0 col-lg-9 mb-1">
                                <button className="btn btn-outline-dark btn-sm align-middle mr-1">
                                    <FaPencil size={14} />&nbsp;Write an article
                            </button>
                                <button className="btn btn-outline-dark btn-sm align-middle mr-1">
                                    <FaCamera size={14} />&nbsp;Images
                            </button>
                                <button className="btn btn-outline-dark btn-sm align-middle mr-1">
                                    <FaVideoCamera size={14} />&nbsp;Video
                            </button>
                            </div>
                            <div className="card-button col-sm-12 col-md-12 col-lg-3 mb-1 text-right">
                                <button className="btn btn-primary btn-sm btn-rectangle">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { isCreatePostEnabled, user } = state.home
    return {
        isCreatePostEnabled,
        user
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleCreatePost
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost)