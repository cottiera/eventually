"use client"

import { useState, useEffect } from 'react'
import EventCard from './EventCard'

const EventCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-10 event_layout">
      {data.map((event) => (
        <EventCard 
          key={event._id}
          event={event}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [events, setEvents] = useState([])
  const handleSearchChange = (e) => {}
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/event')
      const data = await response.json()
      setEvents(data)
    }
    fetchEvents()
  }, [])
  
  return (
  <section className="feed">
    <form className="relative w-full flex-center">
      <input
        type="text"
        placeholder="Search Eventually users and tags. . ."
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input peer"
      />
    </form>
    <EventCardList 
      data={events}
      handleTagClick={() => {}}
    />
  </section>
  )
}

export default Feed