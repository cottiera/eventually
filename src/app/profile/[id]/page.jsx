"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Profile from '@/components/Profile'

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams()
  const userName = "@" + searchParams.get("name") + "'s"
  const [userEvents, setUserEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(`/api/users/${params?.id}/events`)
      const data = await response.json()
      setUserEvents(data)
    }
    if(params?.id) {
      fetchEvents()
    }
  }, [params.id])
  
  return (
    <Profile 
      name={userName}
      desc={`Welcome to ${userName}'s Eventually profile, go on and explore!`}
      data={userEvents}
    />
  )
}

export default UserProfile