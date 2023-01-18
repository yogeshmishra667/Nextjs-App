const Post = ({post}) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;

export async function getStaticProps(context) {
  console.log(context)
  const {params} = context;
  const {postId} = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      post: data
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  const paths = data.map(post => ({
    params: {
      postId: post.id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  }
}




