import { connectToDB } from '@/utils/database'
import Event from '@/models/event'

export const GET = async (request, { params }) => {
  try {
    await connectToDB()
    const event = await Event.findById(params.id).populate('creator')
    if(!event) {
        return new Response("Event not found", { status: 404 })
    }
    return new Response(JSON.stringify(event), { status: 200 })
  } catch (error) {
    return new Reponse("Failed to fetch all events", { status: 500 })
  }
}

export const PATCH = async (request, { params }) => {
    const { eventName, description, location, attendees, budget, theme, tag } = await request.json()
    try {
      await connectToDB()
      const existingEvent = await Event.findById(params.id)
      if(!existingEvent) {
        return new Response("Event not found", { status: 404 })
      }
      existingEvent.eventName = eventName
      existingEvent.description = description
      existingEvent.location = location
      existingEvent.attendees = attendees
      existingEvent.budget = budget
      existingEvent.theme = theme
      existingEvent.tag = tag
      await existingEvent.save()
      return new Response(JSON.stringify(existingEvent), { status: 200 })
    } catch (error) {
      return new Response("Failed to update event", { status: 500 })
    }
  } 

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB()
    await Event.findByIdAndRemove(params.id)
    return new Response("Event deleted successfully", { status: 200 })
  } catch (error) {
    return new Response("Failed to delete event", { status: 500 })
  }
}