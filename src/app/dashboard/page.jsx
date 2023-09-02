"use client"

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@/components/Form'

const Dashboard = () => {
  const [submitting, setSubmitting] = useState(false)
  const [event, setEvent] = useState({
    description: '',
    budget: '',
  })
  const createEvent = async (e) => {

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