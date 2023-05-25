
import React from "react";
import axios from "axios";
import Post from "./Post";

class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
        this.getPosts();
    }

    getPosts() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((data => {
            this.setState({
                posts: data.data
            })
        }))
    }
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <ul>
                    {
                        this.state.posts.map((post) => <Post post = {post} key = {post._id}></Post>)
                    }
                </ul>
            </div>
        );
    }
}

export default PostList;
