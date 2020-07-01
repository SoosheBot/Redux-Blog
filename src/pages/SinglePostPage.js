import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { fetchPost } from "../actions/singlePostActions";


import { Post } from "../components/Post";


const SinglePostPage = ({
  match,
  dispatch,
  post,
  // comments,
  hasErrors,
  loading
}) => {
  useEffect(() => {
    const { id } = match.params;

    // dispatch(fetchComments(id))
    dispatch(fetchPost(id));
  }, [dispatch, match]);

  const renderPost = () => {
    if (loading.post) return <p>Loading post...</p>;
    if (hasErrors.post) return <p>Unable to display post.</p>;

    return <Post post={post} />;
  };


  return (
    <section>
      {renderPost()}
      <Link to="/posts">Back to Posts...</Link>
    </section>
  );
};

const mapStateToProps = state => ({
  post: state.post.post,
  loading: { post: state.post.loading },
  hasErrors: { post: state.post.hasErrors }
});

export default connect(mapStateToProps)(SinglePostPage);
