import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import PropTypes from "prop-types";

const ListPost = ({ posts }) => {
    return (
        // <div></div>
        <div className="grid-container justify-content-center">
            {posts.map(post => (
                <Link key={post._id}>
                    <Post post={post} />
                </Link>
                // <Link to={`/blog/post/${post._id}`} key={post._id}>
                //     <Post post={post} />
                // </Link>
            ))}
        </div>
    );
};

ListPost.propTypes = {
    posts: PropTypes.array.isRequired
};

export default ListPost;