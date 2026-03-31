"use client";

import { useState } from "react";

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: 40 }}>
      <h1>Diabetes Supplement Quiz</h1>

      {step === 1 && (
        <>
          <p>What type of diabetes do you have?</p>
          <button onClick={() => setStep(2)}>Type 2</button>
          <button onClick={() => setStep(2)}>Prediabetes</button>
        </>
      )}

      {step === 2 && (
        <>
          <p>Enter email to see results</p>

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={() => setStep(3)}>
            Show Results
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h2>Recommended Supplements</h2>
          <p>Berberine</p>
          <p>Alpha Lipoic Acid</p>
        </>
      )}
    </div>
  );
}