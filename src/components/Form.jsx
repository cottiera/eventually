import Link from 'next/link'

const Form = ({ type, event, setEvent, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className='blue_gradient'>{type} Event</span>
      </h1>
      <p className="desc text-left max-w-md">{type} and share your event with the world so the next event you attend is as fabulous as yours!</p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-montserrat font-semibold text-base text-gray-700">Your Event</span>
          <input
            value={event.eventName}
            onChange={(e) => setEvent({ 
              ...event,
              eventName: e.target.value
            })}
            type='text'
            placeholder="Name"
            required
            className="form_input"
          />
          <textarea
            value={event.description}
            onChange={(e) => setEvent({ 
              ...event,
              description: e.target.value
            })}
            placeholder="Description"
            required
            className="form_textarea"
          />

        </label>
        <label>
          <span className="font-montserrat font-semibold text-base text-gray-700">Details</span>
          <input
            value={event.location}
            onChange={(e) => setEvent({ 
              ...event,
              location: e.target.value
            })}
            type='text'
            placeholder="Location"
            required
            className="form_input"
          />
          <input
            value={event.attendees}
            onChange={(e) => setEvent({ 
              ...event,
              attendees: e.target.value
            })}
            type='number'
            placeholder="# of Attendees"
            required
            className="form_input"
          />
          <input
            value={event.budget}
            onChange={(e) => setEvent({ 
              ...event,
              budget: e.target.value
            })}
            type='number'
            placeholder="Budget"
            required
            className="form_input"
          />
          <input
            value={event.theme}
            onChange={(e) => setEvent({ 
              ...event,
              theme: e.target.value
            })}
            type='text'
            placeholder="Theme"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-montserrat font-semibold text-base text-gray-700">Tag</span>
          <input
            value={event.tag}
            onChange={(e) => setEvent({ 
              ...event,
              tag: e.target.value
            })}
            type='text'
            placeholder="#whitewedding, or #princessbirthday!"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">Cancel</Link>
            <button 
              type="submit"
              disabled={submitting}
              className="px-5 py-2 text-sm bg-primary-blue rounded-full text-white border border-black"
            >
              {submitting ? '${type}...' : type}
            </button>
        </div>
      </form>
    </section>
  )
}

export default Form