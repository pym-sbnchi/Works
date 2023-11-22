import React, { Component } from "react";
import SideBar from "./SideBar";
import Body from "./Body";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      currentPost: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          posts,
          currentPost: 0,
        });
      });
  }
  handleCurrentPost(index) {
    this.setState({
      currentPost: index,
    });
  }
  render() {
    return (
      <>
        <SideBar
          posts={this.state.posts}
          handleClick={this.handleCurrentPost.bind(this)}
        />
        {this.state.currentPost !== null && (
          <Body post={this.state.posts[this.state.currentPost]} />
        )}
      </>
    );
  }
}
