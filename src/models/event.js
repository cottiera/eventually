import { Schema, model, models } from 'mongoose'

const EventSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  eventName: {
    type: String,
    required: [true, 'Event name is required'],
  },
  description: {
    type: String, 
    required: [true, 'Description is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  attendees: {
    type: Number,
    required: [true, 'Number of attendees is required'],
  },
  budget: {
    type: Number,
    required: [true, 'Budget is required'],
  },
  theme: {
    type: String,
    required: [true, 'Theme is required'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required']
  }
})

const Event = models.Event || model('Event', EventSchema)

export default Event