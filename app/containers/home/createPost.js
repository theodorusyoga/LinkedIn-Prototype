import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FaPencil, FaCamera, FaVideoCamera } from 'react-icons/lib/fa' 

const CreatePost = (props) => {
    return (
        <div id="create-post" className="card mt-1">
            <div className="card-body">
                <p className="card-title text-muted my-2 cursor-pointer">
                    Share an article, photo, video, or idea
                </p>
            </div>
            <div className="list-group list-group-flush">
                <div className="list-group-item py-2 px-2">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-9">
                            <button className="btn btn-outline-dark align-middle mr-1">
                                <FaPencil size={14}/>&nbsp;Write an article
                            </button>
                            <button className="btn btn-outline-dark align-middle mr-1">
                                <FaCamera size={14}/>&nbsp;Images
                            </button>
                            <button className="btn btn-outline-dark align-middle mr-1">
                                <FaVideoCamera size={14}/>&nbsp;Video
                            </button>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-3 text-right">
                            <button className="btn btn-primary">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const { user } = state.home
    return {
        user
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost)