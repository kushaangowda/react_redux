import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
    render() {
        const post = this.props.post ? (
            <div className="post card" key={this.props.post.id}>
                <div className="card-content">
                    <span className="card-title">{this.props.post.title}</span>
                    <p>{this.props.post.body}</p>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );
        return <div className="container">{post}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((post) => post.id === id),
    };
};

export default connect(mapStateToProps)(Post);
