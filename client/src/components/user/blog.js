import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Nav, Button, Container, Form } from "react-bootstrap";
import ListPost from "../posts/ListPost";

const Blog = ({ posts, auth }) => {
    const inputRef = useRef(null);
    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState(false);

    const handleChange = e => {
        setSearch(inputRef.current.value.toLowerCase());
    };

    // setting no post found after waiting for 1 sec
    useEffect(() => {
        setTimeout(() => {
            if (posts.length === 0) setDisplay(true);
        }, 1000);
    }, [posts]);

    return (
        <React.Fragment>
            <div className="mx-5 mt-4">
                <h3 className="text-center">MY TRIPS</h3>
                <Nav className="justify-content-between container pl-4 pr-3">
                    {auth && (
                        <Link to="/blog/post/create">
                            <Button variant="light" className="createTripBtn">
                                +
                            </Button>
                        </Link>
                    )}
                    <Form>
                        <Form.Group controlId="searchBar">
                            <Form.Control
                                type="text"
                                placeholder="Search by city.."
                                ref={inputRef}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Nav>
            </div>
            {posts.length > 0 ? (
                <ListPost
                    posts={posts.filter(post =>
                        post.city.toLowerCase().includes(search)

                    )}
                />

            ) : (
                    display && (
                        <Container
                            style={{ height: "50vh" }}
                            className="d-flex flex-column justify-content-center align-items-center"
                        >
                            {" "}
                            <p className="text-secondary h3">No Post Found !</p>
                        </Container>
                    )
                )}

        </React.Fragment>
    );
};

Blog.propTypes = {
    auth: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired
};

export default Blog;