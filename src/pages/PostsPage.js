import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//4. brings in the async fetchPosts action
import { fetchPosts } from "../actions/postsActions";
// 6. brings in the actual blog post component
import { Post } from "../components/Post";


// 1. puts Redux state in props of the component
const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {

  // 5. makes everything "go"
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  //7. Shows the states (loading, error, or success)
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map(post => <Post key={post.id} post={post} excerpt />);
  };

   

 

  return (
    <section>
      <h1>Posts</h1>
       {renderPosts()}
      <Link to="/dashboard">Back to Dashboard...</Link>
    </section>
  );
};

// 2. Maps reduct state to the props in the React component
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

// 3. connects Redux and React
export default connect(mapStateToProps)(PostsPage);





// useEffect(() => {
//   const fetchPosts = async () => {
//     setLoading=(true);
//   }
// })