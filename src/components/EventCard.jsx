"use client"

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const EventCard = ({ event, viewTag }) => {
  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()

  const viewProfile = () => {
    if (event.creator._id === session?.user.id) {
      return router.push("/profile")
    }
    router.push(`/profile/${event.creator._id}?name=${event.creator.username}`)
  }

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
              @{event.creator.username}
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
      <p 
        className="font-montserrat text-sm blue_gradient cursor-pointer"
        onClick={() => viewTag && viewTag(event.tag)}
      >
        {event.tag}
      </p>
    </div>
  )
}

export default EventCard