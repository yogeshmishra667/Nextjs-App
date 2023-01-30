import { useState } from 'react';

const Comment = () => {
  const [comments, setComments] = useState([]);
  const showCommentOnClick = async () => {
    const response = await fetch('http://localhost:8080/api/comment');
    const data = await response.json();
    setComments(data);
  };

  return (
    <div>
      <h1>Comment</h1>
      <button onClick={showCommentOnClick}>Show Comment</button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.comment}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
