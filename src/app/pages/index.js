
import { useEffect, useState } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const { data } = await axios.get('/api/events');
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Seats available: {event.availableSeats}</p>
          {}
        </div>
      ))}
    </div>
  );
}
export default EventList;
