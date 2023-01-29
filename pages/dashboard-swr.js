import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('http://localhost:3000/dashboard');
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher);

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Posts- {data.posts}</h2>
      <h2>Likes- {data.likes}</h2>
      <h2>Follower- {data.followers}</h2>
      <h2>Following- {data.following}</h2>
    </div>
  );
};

export default DashboardSWR;
