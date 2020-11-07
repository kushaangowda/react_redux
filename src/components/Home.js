import React, { Component } from "react";
import Logo from "../logo192.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// $ npm install react-redux

class Home extends Component {
    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map((post) => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Logo} alt="logo" />
                        <div className="card-content">
                            <Link to={"/" + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="center">No posts yet</div>
        );
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

export default connect(mapStateToProps)(Home);

// connect is a higher order component, which wraps Home component
// and gives it the ability to connect to redux store
// and send posts data in the form of props
