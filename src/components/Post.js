import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
    state = {
        id: null,
        posts: {},
    };
    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.post_id; //in App.js, we used :post_id
        this.setState({
            id: id,
        });
        let link = "https://jsonplaceholder.typicode.com/posts/" + id;
        axios
            .get(link)
            .then((res) => {
                this.setState({
                    posts: res.data,
                });
                console.log(this.state);
            })
            .catch((err) => {
                console.log("error: ", err);
            });
    }
    render() {
        const posts = this.state.posts;
        return (
            <div className="container">
                <h4 className="center">ID: {this.state.id}</h4>
                <div className="post card" key={posts.id}>
                    <div className="card-content">
                        <span className="card-title">{posts.title}</span>
                        <p>{posts.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
