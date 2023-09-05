"use client"

import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const DashboardCard = ({ event, viewTag, viewProfile, handleEdit, handleDelete }) => {
  const { data: session } = useSession()
  const pathName = usePathname()

  return (
    <div className="event_dashboard_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image 
            src={event.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 
              className="font-battambang font-semibold text-gray-900 cursor-pointer"
              onClick={() => viewProfile && viewProfile(event.creator.username)}
            >
              {event.creator.username}
            </h3>
            <p className="font-montserrat text-sm text-gray-500">
              {event.creator.email}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="my-4 font-battambang text-sm text-gray-700">
          {event.eventName}
        </p>
        <p className="my-4 font font-montserrat text-sm text-gray-500">
          <span className="font-medium text-gray-500/20">Description:</span>
          <br></br>
          {event.description}
        </p>
        <p className="my-4 font font-montserrat text-sm text-gray-500">
          <span className="font-medium text-gray-500/20">Location:</span>
          <br></br>
          {event.location}
        </p>
        <p className="my-4 font font-montserrat text-sm text-gray-500">
          <span className="font-medium text-gray-500/20"># Of Attendees:</span>
          <br></br>
          {event.attendees} Guests
        </p>
        <p className="my-4 font font-montserrat text-sm text-gray-500">
          <span className="font-medium text-gray-500/20">Budget:</span>
          <br></br>
          {event.budget}
        </p>
        <p className="my-4 font font-montserrat text-sm text-gray-500">
          <span className="font-medium text-gray-500/20">Theme:</span>
          <br></br>
          {event.theme}
        </p>
        <p 
          className="font-montserrat text-sm cursor-pointer"
          onClick={() => viewTag && handleTagClick(event.tag)}
        >
          <span className="font-medium text-gray-500/20">Tag:</span>
          <br></br>
          <span className="blue_gradient">{event.tag}</span>
        </p>
      </div>
      { session?.user.id === event.creator._id && pathName === '/dashboard' && (
        <div className="mt-auto flex-center gap-4 border-t pt-3">
          <p
            className="edit_btn"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p 
            className="delete_btn"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default DashboardCard