// Comment component
// import React
// class extends Component
// import the class BlogPost
// expects single prop `this.props.commentText`


import React, { Component } from 'react';
export default class Comment extends React.Component {
  // single div in render() method
  render()
  {
    // <div> className="comment" attribute
    return <div className="comment">{this.props.commentText} </div>
  //  we can unpack variable values directly with JSX by wrapping them in {}
  }

}
