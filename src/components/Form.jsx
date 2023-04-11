import React from "react";
import "../styles/FormStyles.css";

function Form() {
  return (
    <div className="form">
      <form>
        <label htmlFor="Your Name">Your Name</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />
        <label htmlFor="Subject">Subject</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          placeholder="Type your message here"
        ></textarea>
        <button className="btn active">Submit</button>
      </form>
    </div>
  );
}

export default Form;
