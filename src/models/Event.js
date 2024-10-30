
import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  availableSeats: Number,
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
