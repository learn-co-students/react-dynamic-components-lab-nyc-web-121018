// add Comment component here
import React from "react";

export default class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <li>{this.props.commentText}</li>
      </div>
    );
  }
}
