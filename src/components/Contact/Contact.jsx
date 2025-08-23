import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "33b73c06-b052-4948-8f7d-7cf0d61fc453");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src={email_icon} alt="" />Suyashchouhan03@gmail.com</li>
          <li><img src={phone_icon} alt="" />+91 9425983055</li>
          <li><img src={location_icon} alt="" />C-64 , near Minal mall <br />Bhopal , Madhya Pradesh</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your Phone number' required />
          <label>Write Your Message here</label>
          <textarea name="message" rows='6' placeholder='Write your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
