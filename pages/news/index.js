const news = ({news}) => {
  return (
    <div>
      <h1>The News Page</h1>
      <ul>
        {
          news.map(news => (
            <li key={news.id}>
              <h2>{news.title}</h2>
              <p>{news.description} | {news.category }</p>
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default news;

// for the server side rendering we need to use getServerSideProps
export async function getServerSideProps () {
  const response  =  await fetch('http://localhost:3000/news');
  const data = await response.json();
  return {
    props: {
      news: data
    }
  }
}