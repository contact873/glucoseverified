"use client";

import { useState } from "react";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {

    await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });

    alert("Account Created");
  }

  return (
    <div className="p-10 max-w-md mx-auto">

      <h1>Create Account</h1>

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