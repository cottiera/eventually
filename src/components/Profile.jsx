import EventCard from './EventCard'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className='blue_gradient'>{name} Profile</span>
      </h1> 
      <p className="desc text-left">
        {desc}
      </p>
      <div className="mt-10 event_layout">
      {data.map((event) => (
        <EventCard 
          key={event._id}
          event={event}
          handleEdit={() => handleEdit && handleEdit(event)}
          handleDelete={() => handleDelete && handleDelete(event)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile