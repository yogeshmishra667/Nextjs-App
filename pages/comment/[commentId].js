import { comments } from '../../data/comment';
const Comment = ({ comments }) => {
  return (
    <div>
      <h1>{comments.id}</h1>
      <h3>
        {comments.email} - {comments.name}
      </h3>
      <p>{comments.comment}</p>
    </div>
  );
};

export default Comment;

export async function getStaticProps(context) {
  //console.log(context)
  const { params } = context;
  const { commentId } = params;

  // TODO: Don't Do this way || never call own api from getStaticProps
  const data = comments.find((comment) => comment.id === parseInt(commentId));
  // const response = await fetch(`http://localhost:8080/api/comment/${commentId}`);
  // const data = await response.json();
  //console.log(data);
  return {
    props: {
      comments: data,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:8080/api/comment`);
  const data = await response.json();
  const paths = data.map((comment) => ({
    params: {
      commentId: comment.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
