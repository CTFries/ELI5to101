export function SuggestionForm() {
  return (
    <div className="card-body">
      <h2 className="card-title">Submit your idea</h2>
      <p>
        Do you have a technology concept you'd like me to break down and explain
        in simple terms? Let me know by submitting your idea using the form
        below.
      </p>
      <form>
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
        <div className="card-actions justify-end mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
