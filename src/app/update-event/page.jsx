"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Form from '@/components/Form'

const EditEvent = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const eventId = searchParams.get('id')
  const [submitting, setIsSubmitting] = useState(false)
  const [event, setEvent] = useState({
    eventName: '',
    description: '',
    location: '',
    attendees: '',
    budget: '',
    theme: '',
    tag: '',
  })
  useEffect(() => {
    console.log(searchParams.get('id'))
    const getEventDetails = async () => {
      const response = await fetch(`api/event/${eventId}`)
      const data = await response.json()
      setEvent({
        eventName: data.eventName,
        description: data.description,
        location: data.location,
        attendees: data.attendees,
        budget: data.budget,
        theme: data.theme,
        tag: data.tag
      })
    }
    if(eventId) {
      getEventDetails()
    }
  }, [eventId])
  
  const updateEvent = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    if(!eventId) {
      return alert("Event ID not found")
    }
    try {
      const response = await fetch(`api/event/${eventId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          eventName: event.eventName,
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
      setIsSubmitting(false)
    }
  }

  return (
  <Form 
    type="Edit"
    event={event}
    setEvent={setEvent}
    submitting={submitting}
    handleSubmit={updateEvent}
  />
  )
}

export default EditEvent