import { comments } from '../../../data/comment';

const handler = (req, res) => {
  if (req.method === 'GET') {
    const { commentId } = req.query;
    //console.log(parseInt(commentId));
    const comment = comments.find((comment) => comment.id === parseInt(commentId));
    res.status(200).json(comment);
  } else if (req.method === 'DELETE') {
    const { commentId } = req.query;
    const comment = comments.find((comment) => comment.id === parseInt(commentId));
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.status(200).json({ message: 'Comment deleted.' });
  }
};

export default handler;
