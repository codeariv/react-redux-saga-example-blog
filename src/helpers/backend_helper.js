import { get } from "./api_helper";
import * as url from "./url_helper";

//Post
export const getPosts = () => get(url.GET_POSTS);

//Post
export const getPostDetails = (id) =>
  get(url.GET_POST_DETAILS, {
    params: {
      id: id,
    },
  });
