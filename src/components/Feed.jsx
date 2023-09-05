"use client"

import { useState, useEffect } from 'react'
import EventCard from './EventCard'

const EventCardList = ({ data, viewTag, viewProfile }) => {
  return (
    <div className="mt-10 event_layout">
      {data.map((event) => (
        <EventCard 
          key={event._id}
          event={event}
          viewTag={viewTag}
          viewProfile={viewProfile}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchedResults, setSearchedResults] = useState([])
  const [events, setEvents] = useState([])

  const filterEvents = (query, target = null) => {
    const regex = new RegExp(query, "i")
    if(target && target === 'tag') {
      return events.filter(
        (item) => regex.test(item.tag)
      )
    }
    return events.filter(
      (item) => 
        regex.test(item.creator.username) || 
        regex.test(item.tag) || 
        regex.test(item.description) || 
        regex.test(item.eventName)
    )
  }

  const viewTag = (tagName) => {
    setSearchText(tagName)
    const searchResult = filterEvents(tagName, 'tag')
    setSearchedResults(searchResult)
  }

  const viewProfile = () => {}

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)
    setSearchTimeout(setTimeout(() => {
      const searchResult = filterEvents(e.target.value)
      setSearchedResults(searchResult)
    }, 500))
  }

  const fetchEvents = async () => {
    const response = await fetch('/api/event')
    const data = await response.json()
    setEvents(data)
  }

  useEffect(() => {
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
    {searchText ? (
      <EventCardList 
        data={searchedResults}
        viewTag={viewTag}
        viewProfile={viewProfile}
      />
    ) : (
      <EventCardList 
        data={events}
        viewTag={viewTag}
        viewProfile={viewProfile}
      />
    )}
  </section>
  )
}

export default Feed