import { useNavigate, useLocation, Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
function UpdateNote() {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(AppContext);
  const setNotes = context.setNotes;
  const idx = location.state.idx;
  console.log(idx);
  const note = JSON.parse(localStorage.getItem("smart-hire"))[idx];
  const allNotes = JSON.parse(localStorage.getItem("smart-hire"));

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
    note["updatedAt"] = datetime;
    note["title"] = e.target[0].value;
    note["content"] = e.target[1].value;
    allNotes.splice(idx, 1, note);
    console.log(idx, note);
    localStorage.setItem("smart-hire", JSON.stringify(allNotes));
    setNotes(allNotes);
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
            Update Note
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
                    defaultValue={note.title}
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
                    className="flex h-10 max-h-96 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Enter Content"
                    id="email"
                    name="content"
                    defaultValue={note.content}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Update Note{" "}
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

export default UpdateNote;
