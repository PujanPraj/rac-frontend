import React from "react";

const Form = () => {
  return (
    <>
      <form action="https://formspree.io/f/mvojvray" method="POST">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="Name"
          placeholder="Your name.."
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="Email"
          placeholder="Your Email.."
          required
        />
        <label for="email">Phone no.</label>
        <input
          type="text"
          id="number"
          name="Phone no."
          placeholder="Your Phone no.."
          required
        />
        <label for="message">Message</label>
        <textarea
          id="subject"
          name="Message"
          placeholder="Write something.."
          style={{ height: "200px" }}
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
