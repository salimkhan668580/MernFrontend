import React from 'react'

import "./Testomonial.scss"


function Testomonial() {
   // Dummy data for testimonials
   const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae mauris velit.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'Sed imperdiet elit eu augue vehicula, eget dignissim elit dapibus.',
    },
    {
      id: 3,
      author: 'Alice Johnson',
      text: 'Fusce in sapien in nisi rhoncus tristique. Donec pretium, dolor vitae vulputate.',
    },
  ];
  return (
  
    <div className="testimonials">
    <h2>Testimonials</h2>
    <div className="testimonial-list">
      {testimonials.map(testimonial => (
        <div className="testimonial" key={testimonial.id}>
          <p className="testimonial-text">{testimonial.text}</p>
          <p className="testimonial-author">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Testomonial
