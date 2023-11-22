import React, { Component } from "react";
import Comments from "./Comments";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null,
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3001/comments?post-id=${this.props.post.id}`)
      .then((res) => res.json())
      .then((comments) => {
        this.setState({
          comments,
        });
      });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.post.id !== this.props.post.id) {
      fetch(`http://localhost:3001/comments?post-id=${this.props.post.id}`)
        .then((res) => res.json())
        .then((comments) => {
          this.setState({
            comments,
          });
        });
    }
  }

  render() {
    return (
      <div class="container">
        <div class="post">
          <img src={`assets/${this.props.post.image}`} alt="" />
          <h1>{this.props.post.title}</h1>
          <div>{this.props.post.body}</div>
        </div>
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}
