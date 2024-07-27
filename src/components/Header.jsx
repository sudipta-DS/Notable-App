import { Link } from "react-router-dom";
import { Search } from "./utils";
import { useContext } from "react";
import { AppContext } from "../App";
function Header() {
  const context = useContext(AppContext);
  const [notes, setNotes] = [context.notes, context.setNotes];
  function handleSearch(e) {
    const allNotes = JSON.parse(localStorage.getItem("smart-hire"));
    e.preventDefault();
    const filteredNotes = Search(notes, e.target.value);
    if (e.target.value === "") {
      setNotes(allNotes);
    } else if (!filteredNotes.length) {
      setNotes([]);
    } else {
      setNotes(filteredNotes);
    }
  }
  return (
    <div className="relative w-full bg-white border-b border-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
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
          </span>
          <span className="font-bold">Notable</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            <li>
              <Link to="/">
                {" "}
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex grow justify-end">
          <input
            onChange={(e) => handleSearch(e)}
            className="flex mr-4 h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search by Title"
          />
        </div>
        <div className="hidden lg:block">
          <Link to="/add-note">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add Note
            </button>
          </Link>
        </div>

        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 cursor-pointer"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
