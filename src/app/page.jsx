import Feed from '@/components/Feed'

const Homepage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Plan Your Events
        <br className="max-w-md:hidden"/> 
        <span className="magenta_gradient text-center">Eventually</span>
      </h1>
      <p className="desc text-center">
        Effortlessly plan, share, and create unforgettable moments with our all-in-one event planning platform 
      </p>
      <Feed />
    </section>
  )
}

export default Homepage