import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactContainer, Form, Input } from "./contact.styles";

const Contact = () => {
  const [success, setSuccess] = useState(null);
  // const [email, setEmail] = useState("");
  // const [massage, setMassage] = useState("");
  const form = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const event = e.target;

    emailjs
      .sendForm(
        "service_3k0ekto",
        "template_mms7kkk",
        form.current,
        "vWY253AsB8LFUqx_O"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setSuccess(true);
          event.name.value = "";
          event.email.value = "";
          event.message.value = "";
        },
        (error) => {
          console.error(error);
          setSuccess(false);
        }
      );
  };
  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <Form ref={form} onSubmit={submitHandler}>
        <Input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          // onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          required
          name="message"
          placeholder="Enter Your message....."
          // onChange={(e) => setMassage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </Form>

      {success && (
        <p style={{ color: "red", fontStyle: "italic" }}>
          Succeed to send the message....
        </p>
      )}
      {success === false && (
        <p style={{ color: "red", fontStyle: "italic" }}>
          failed to send the message please try again later....
        </p>
      )}
    </ContactContainer>
  );
};

export default Contact;
