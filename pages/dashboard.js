import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:3000/dashboard');
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Posts- {dashboardData.posts}</h2>
      <h2>Likes- {dashboardData.likes}</h2>
      <h2>Follower- {dashboardData.followers}</h2>
      <h2>Following- {dashboardData.following}</h2>
    </div>
  );
};

export default Dashboard;
