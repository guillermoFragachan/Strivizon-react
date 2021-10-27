import React from "react";

class SingleComment extends React.Component {
  deleteComment = async (query) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + query,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWM5NDRiYjUzZDAwMTViMTllY2MiLCJpYXQiOjE2MzMwMDE1NzksImV4cCI6MTYzNDIxMTE3OX0.WGqdgb0uXW7-MCUC94FOKrTEainfaSnnNBv6Le-F7uA",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        this.fetchComments(this.props.query)
      }
    } catch {
      console.log("error")
    }
  };
  render() {
    return (
      <>
        <p
          onClick={() => {
            this.deleteComment(this.props.element);
            console.log(this.props.element);
          }}
        >
          {this.props.comment}
        </p>
      </>
    );
  }
}

export default SingleComment;
