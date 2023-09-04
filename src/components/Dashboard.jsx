import DashboardCard from "./DashboardCard"
import Link from 'next/link'

const Dashboard = ({ data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="secondary_magenta_gradient text-left">Dashboard</span>
      </h1>
      <p className="desc text-left">
        Create, edit, and visualize all of your creative Eventually events in your personal dashboard 
      </p>
      <div className="mt-5">
        <Link
          href="/create-event"
          className="blue_btn"
        >
          Create New Event
        </Link>
      </div>
      <div className="event_layout">
      {data.map((event) => (
        <DashboardCard 
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

export default Dashboard