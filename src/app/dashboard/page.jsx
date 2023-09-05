"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'

const MyDashboard = () => {
  const { data: session } = useSession()
  const [events, setEvents] = useState([])
  const router = useRouter()

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/events`)
      const data = await response.json()
      setEvents(data)
    }
    if(session?.user.id){
      fetchEvents()
    }
  }, [])

  const handleEdit = (event) => {
    router.push(`/update-event?id=${event._id}`)
  }

  const handleDelete = async (event) => {
    const hasConfirmed = confirm("This action can not be reversed. Are you sure you want to delete this Eventually event?")
    if(hasConfirmed) {
      try {
        await fetch(`api/event/${event._id.toString()}`, {
          method: 'DELETE'
        })
        const filteredEvents = events.filter((v) => v._id !== event._id)
        setEvents(filteredEvents)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Dashboard 
      data={events}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyDashboard