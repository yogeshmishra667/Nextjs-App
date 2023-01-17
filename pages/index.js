import Link from 'next/Link';
const home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <Link href='/blog'>
        Blog
      </Link>

      <Link href='/product'>
Product
      </Link>
    </div>
  );
}

export default home;