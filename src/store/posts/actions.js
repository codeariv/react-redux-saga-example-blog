import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_DETAILS,
  GET_POST_DETAILS_SUCCESS,
  GET_POST_DETAILS_FAIL,
} from "./actionTypes";

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getPostsFail = (error) => {
  return {
    type: GET_POSTS_FAIL,
    payload: error,
  };
};

export const getPostDetails = (id) => {
  return {
    type: GET_POST_DETAILS,
    payload: id,
  };
};

export const getPostDetailsSuccess = (post) => {
  return {
    type: GET_POST_DETAILS_SUCCESS,
    payload: post,
  };
};

export const getPostDetailsFail = (error) => {
  return {
    type: GET_POST_DETAILS_FAIL,
    payload: error,
  };
};
