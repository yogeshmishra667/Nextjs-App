import { useState } from 'react';
import { useRouter } from 'next/router';

const Event = ({ eventList }) => {
  const [eventData, setEventData] = useState(eventList);
  const router = useRouter();
  const fetchSportCategory = async () => {
    const response = await fetch('http://localhost:3000/events?category=sports');
    const data = await response.json();
    setEventData(data);
    router.push('/event?category=sports', undefined, { shallow: true });
  };

  return (
    <div>
      <h1>The Event Page</h1>
      <button onClick={fetchSportCategory}> Sport Category</button>
      {eventData.map((event) => (
        <div key={event.id}>
          <h2>
            {event.title} {event.id} - {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Event;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `?category=sports` : '';
  const response = await fetch(`http://localhost:3000/events${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
};
