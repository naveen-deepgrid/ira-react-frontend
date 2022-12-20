import React from 'react'

const Heading = ({ title }) => {
  return (
    <>
        <p>Title</p>
        <section className="my-section">
            {title}
        </section>
    </>
  )
}

export default Heading