import Event from '@/models/event'
import { connectToDB } from '@/utils/database'

export const POST = async (req) => {
    const { userId, eventName, description, location, attendees, budget, theme, tag } = await req.json()
    try {
        await connectToDB()
        const newEvent = new Event({ 
            creator: userId,
            eventName,
            description,
            location,
            attendees,
            budget,
            theme,
            tag    
        })
        await newEvent.save()
        return new Response(JSON.stringify(newEvent), { status: 201 })
    } catch (error) {
        return new Response("Failes to create new event", { status: 500 })
    }
}