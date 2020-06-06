import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const Post = ({ post }) => {
    return (
        <Card className="deckStyle">
            <Card.Body className="postCover">
                <Card.Title className="text-center p-5">{post.city}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{post.country}</small>
            </Card.Footer>
        </Card>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;