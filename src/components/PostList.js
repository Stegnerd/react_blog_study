import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return <div>Post List</div>;
  }
}

// pass null when you don't have any state that you want to get into the component
export default connect(
  null,
  { fetchPost }
)(PostList);
