function Post(props) {
    let postStyle = {
        color: 'grey'
    }
    return (
        <li className="PostItem" style={postStyle}>
            {props.post.title}
        </li>
    );
}

export default Post;
