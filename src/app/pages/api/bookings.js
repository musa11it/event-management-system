
import Event from 'src/models/Event';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { eventId, seatsToBook } = req.body;
    const event = await Event.findById(eventId);
    
    if (event.availableSeats >= seatsToBook) {
      event.availableSeats -= seatsToBook;
      await event.save();
      return res.status(200).json({ message: 'Booking successful' });
    } else {
      return res.status(400).json({ message: 'Not enough seats available' });
    }
  }
}
