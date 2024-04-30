"use client";
import React from "react";
export function SuggestionForm() {
  let captchaAnswer = "";
  let captchaQuestion = "";
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const question = `What is ${num1} + ${num2}?`;
    const answer = num1 + num2;
    captchaQuestion = question;
    console.log(captchaQuestion);
    captchaAnswer = answer.toString();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event.target.captcha.value !== captchaAnswer) {
      alert("CAPTCHA answer is incorrect. Please try again.");
      generateCaptcha();
      return;
    }
    const idea = event.target.idea.value;
    const tags = event.target.tags.value;
    const email = event.target.email.value;
    const name = event.target.name.value;
    try {
      const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea, tags, email, name }),
      });
      if (response.ok) {
        event.target.reset();
        generateCaptcha();
        alert("Your suggestion has been submitted successfully!");
      } else {
        throw new Error("Failed to submit suggestion");
      }
    } catch (error) {
      console.error("Error storing suggestion:", error);
      alert(
        "An error occurred while submitting your suggestion. Please try again.",
      );
    }
  };
  generateCaptcha();

  return (
    <div className="card-body">
      <h2 className="card-title">Submit your idea</h2>
      <p>
        Do you have a technology concept you'd like me to break down and explain
        in simple terms? Let me know by submitting your idea using the form
        below.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full">
          <label className="label" htmlFor="idea">
            <span className="label-text">Your idea*:</span>
          </label>
          <textarea
            id="idea"
            name="idea"
            placeholder="e.g., Blockchain, API, Machine Learning"
            className="textarea textarea-bordered h-24"
            maxLength={1000}
            required
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label" htmlFor="tags">
            <span className="label-text">Suggested tags:</span>
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="e.g., web, security, data"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label" htmlFor="email">
            <span className="label-text">Your email*:</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label" htmlFor="name">
            <span className="label-text">Your name:</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label" htmlFor="captcha">
            <span className="label-text">Answer the math question:</span>
          </label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            placeholder={captchaQuestion}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="card-actions justify-end mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
