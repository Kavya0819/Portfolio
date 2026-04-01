"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div style={{
      background: "#0f172a",
      minHeight: "100vh",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "#1e293b",
        padding: "30px",
        borderRadius: "10px",
        width: "300px"
      }}>
        <h2>Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <button style={{
          width: "100%",
          padding: "10px",
          background: "#38bdf8",
          border: "none",
          cursor: "pointer"
        }}>
          Send
        </button>
      </form>
    </div>
  );
}