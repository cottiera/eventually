"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const DashboardCard = ({ event, viewTag, viewProfile, handleEdit, handleDelete }) => {
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()
  return (
    <div className="event_card">
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
      <p className="my-4 font-battambang text-sm text-gray-700">
        {event.eventName}
      </p>
      <p className="my-4 font font-montserrat text-sm text-gray-500">
        {event.description}
      </p>
      <p className="my-4 font font-montserrat text-sm text-gray-500">
        {event.location}
      </p>
      <p className="my-4 font font-montserrat text-sm text-gray-500">
        {event.attendees}
      </p>
      <p className="my-4 font font-montserrat text-sm text-gray-500">
        {event.budget}
      </p>
      <p className="my-4 font font-montserrat text-sm text-gray-500">
        {event.theme}
      </p>
      <p className="my-4 font font-montserrat text-sm text-gray-500">
        {event.tag}
      </p>
      <p 
        className="font-montserrat text-sm blue_gradient cursor-pointer"
        onClick={() => viewTag && handleTagClick(event.tag)}
      >
        {event.tag}
      </p>

      { session?.user.id === event.creator._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-4 border-t pt-3">
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