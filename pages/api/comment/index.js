import { comments } from '../../../data/comment';
export default function Comment(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(comments);
  }

  if (req.method === 'POST') {
    const { name, email, comment } = req.body;
    if (!comment) {
      res.status(422).json({ message: 'Invalid input.' });
    }
    const newComment = {
      id: new Date().toISOString(),
      name,
      email,
      comment,
    };
    comments.push(newComment);
    res.status(201).json({ message: 'Added comment.', comment: newComment });
  }
}
