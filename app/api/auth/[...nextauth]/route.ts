"use client";

import { useState } from "react";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function signup() {

    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        name
      })
    });

    alert("Account created");

    window.location.href = "/login";
  }

  return (
    <div className="p-10 max-w-md mx-auto">

      <h1 className="text-2xl mb-4">
        Create Account
      </h1>

      <input
        placeholder="Name"
        className="border p-2 w-full mb-3"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        className="border p-2 w-full mb-3"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={signup}
        className="bg-green-600 text-white px-4 py-2"
      >
        Sign Up
      </button>

    </div>
  );
}