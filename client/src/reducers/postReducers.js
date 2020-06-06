import {
    CREATE_POST,
    GET_POST,
    GET_POSTS
} from "../actions/types";

const initialState = {
    post: {},
    posts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case GET_POSTS:
            return {
                ...state,
                post: {},
                posts: [...action.payload]
            };
        case GET_POST:
            return {
                ...state,
                post: { ...action.payload[0] }
            };

        default:
            return state;
    }
}