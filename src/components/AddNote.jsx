import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
function AddNote() {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const notes = context.notes;
  const setNotes = context.setNotes;
  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const datetime =
      "" +
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      "  " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();

    const newNote = [
      ...notes,
      {
        [e.target[0].name]: e.target[0].value,
        [e.target[1].name]: e.target[1].value,
        createdAt: datetime,
        updatedAt: "not edited",
      },
    ];
    console.log(newNote);
    localStorage.setItem("smart-hire", JSON.stringify(newNote));
    setNotes(newNote);
    navigate("/");
  }
  return (
    <section className="rounded-md p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 0 300.61719 258.625"
              width="40"
              fill="#000000"
            >
              <path
                d="m242.3086 115.095h-183.999999a57.55 57.55 0 1 1 0-115.09h183.999999a57.55 57.55 0 1 1 0 115.09zm-183.999999-103.09a45.55 45.55 0 1 0 0 91.09h183.999999a45.55 45.55 0 1 0 0-91.09z"
                fill="#000000"
              />
              <path
                d="m229.6186 258.625h-40.88a57.55 57.55 0 0 1 0-115.09h40.88a57.55 57.55 0 0 1 0 115.09zm-40.88-103.09a45.55 45.55 0 0 0 0 91.09h40.88a45.55 45.55 0 0 0 0-91.09z"
                fill="#000000"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold leading-tight text-black">
            Create Note
          </h2>
          <form
            action="#"
            method="POST"
            className="mt-8"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Title{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter Title"
                    id="name"
                    name="title"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Content
                </label>
                <div className="mt-2">
                  <textarea
                    className="flex h-10 min-h-24 max-h-96 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Enter Content"
                    id="email"
                    name="content"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Note{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                <Link to="/">
                  <button
                    type="button"
                    className="inline-flex mt-3 w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black border-2 border-black"
                  >
                    Cancel{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddNote;
