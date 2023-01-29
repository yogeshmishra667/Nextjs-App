const ArticleByCategory = ({ news, category }) => {
  console.log(news);
  return (
    <div>
      <h1>This is the dynamic Page for Category: {category}</h1>
      <br />
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <h2>{news.title}</h2>
            <p>
              {news.description} | {news.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleByCategory;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { category } = params;
  const response = await fetch(`http://localhost:3000/news?category=${category}`);
  const data = await response.json();
  return {
    props: {
      news: data,
      category,
    },
  };
};
