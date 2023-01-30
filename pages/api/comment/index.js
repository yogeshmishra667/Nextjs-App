import { comments } from '../../../data/comment';
export default function Comment(req, res) {
  res.status(200).json(comments);
}
