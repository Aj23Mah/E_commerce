import React from "react";
import "./Contact.css";
// import Navbar from './Navbar'

function Contact() {
  return (
    <div className="contact">
      {/* <><Navbar /></> */}
      {/* <div className="contact_img">
        <img src="https://imgs.search.brave.com/Kxu5rmXChwhrGtlJsooVcxv_eMJ5PAbAvD3B50Jix80/rs:fit:1170:400:1/g:ce/aHR0cHM6Ly93d3cu/aHVtYW5lbmRlYXZv/dXIuaW4vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDIvY29u/dGFjdC1iYW5uZXIu/anBn" />
      </div> */}
      <div className="title">Contact Us</div>
      <div className="contact_container">
        <form>
          <span>Name</span><br/>
          <input type="text" placeholder="Name" /><br/>
          <span>Address</span><br/>
          <input type="text" placeholder="Address" /><br/>
          <span>Email</span><br/>
          <input type="text" placeholder="Email" /><br/>
          <span>Message</span><br/>
          <input type="text" placeholder="Message if any" /><br/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
