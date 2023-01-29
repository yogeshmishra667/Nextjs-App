import Link from 'next/link';
const postList = ({posts}) => {
  return (
    <div>
      <h1>Posts</h1>
      {
        posts.map(post => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
            <h2>{post.id} - {post.title}</h2>
            </Link>
                <hr />
          </div>
        ))
      
      } 
  
    </div>
  );


}

export default postList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
  return {
    props: {
      posts: data
    }
  }
}