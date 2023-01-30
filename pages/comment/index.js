import { useState } from 'react';

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const showCommentOnClick = async () => {
    const response = await fetch('http://localhost:8080/api/comment');
    const data = await response.json();
    setComments(data);
  };

  const submitCommentOnClick = async () => {
    const response = await fetch('http://localhost:8080/api/comment', {
      method: 'POST',
      body: JSON.stringify({ comment, name, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Comment</h1>
      <label htmlFor="comment">Comment</label>
      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="email">Email</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={submitCommentOnClick}>Submit Comment</button>
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
