import React from "react";
import Post from "./Post/Post";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: props.posts
  };
};
let mapDispatchToProps = (dispatch) => {};

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;

    props.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <MyPosts
      addPost={addPost}
      onPostChange={onPostChange}
      posts={props.posts}
    />
  );
};

export default MyPostsContainer;
