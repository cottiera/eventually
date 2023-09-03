"use client"

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@/components/Form'

const Dashboard = () => {
  const [submitting, setSubmitting] = useState(false)
  const [event, setEvent] = useState({
    eventName: '',
    description: '',
    location: '',
    attendees: '',
    budget: '',
    theme: '',
    tag: ''
  })
  const createEvent = async (e) => {
    const router = useRouter()
    const { data: session } = useSession()
    e.preventDefault()
    setSubmitting(true)
    try {
      const response = await fetch('api/event/new', {
        method: 'POST',
        body: JSON.stringify({
          name: event.eventName,
          userId: session?.user.id,
          description: event.description,
          location: event.location,
          attendees: event.attendees,
          budget: event.budget,
          theme: event.theme,
          tag: event.tag
        })
      })
      if(response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <Form 
      type="Create"
      event={event}
      setEvent={setEvent}
      submitting={submitting}
      handleSubmit={createEvent}
    />
  )
}

export default Dashboard