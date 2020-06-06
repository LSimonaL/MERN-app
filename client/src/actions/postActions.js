import axios from "axios";
import {
    CREATE_POST,
    GET_POST,
    GET_POSTS
} from "./types";

import { setErrors, clearErrors } from "./errorActions";

export const createPost = (postData, history) => dispatch => {
    axios
        .post("/api/posts/create", postData)
        .then(res => history.push("/blog"))
        .catch(err =>
            dispatch({
                type: CREATE_POST,
                payload: err.response.data
            })
        );
};


export const getPostByID = id => dispatch => {
    axios
        .get(`/api/posts/post/${id}`)
        .then(res => {
            dispatch({
                type: GET_POST,
                payload: res.data
            });
            dispatch(clearErrors());
        })

        .catch(err => {
            dispatch(setErrors(err.response.data));
        });
};

export const getPostsByAuthor = author => dispatch => {
    axios
        .get(`/api/posts/author/${author}`)
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(setErrors(err.response.data));
        });
};

export const getPosts = () => dispatch => {
    axios
        .get(`/api/posts/`)
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
            dispatch(clearErrors());
        })
        .catch(err => {
            dispatch(setErrors(err.response.data));
        });
};

