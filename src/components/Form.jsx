import Link from 'next/link'

const Form = ({ type, event, setEvent, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className='blue_gradient'>{type} Event</span>
      </h1>
      <p className="desc text-left max-w-md">{type} and share your event with the world so that the next event you attend is as fabulous as yours!</p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gab-7 glassmorphism"
      >
        <label>
          <span className="font-montserrat font-medium text-base text-gray-700">Your Event</span>
          <input
            value={event.name}
            onChange={(e) => setEvent({ 
              ...event,
              name: e.target.value
            })}
            placeholder="Name"
            required
            className="form_textarea"
          />
          <input
            value={event.description}
            onChange={(e) => setEvent({ 
              ...event,
              description: e.target.value
            })}
            placeholder="Event Description"
            required
            className="form_textarea"
          />

        </label>
      </form>
    </section>
  )
}

export default Form