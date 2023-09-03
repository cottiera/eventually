import { connectToDB } from '@/utils/database'
import Event from '@/models/event'

export const GET = async (request) => {
  try {
    await connectToDB()
    const events = await Event.find({}).populate('creator')
    return new Response(JSON.stringify(events), { status: 200 })
  } catch (error) {
    return new Reponse("Failed to fetch all events", { status: 500 })
  }
}