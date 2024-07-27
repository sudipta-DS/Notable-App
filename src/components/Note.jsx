import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
function Note({ idx, title, content, createdAt, updatedAt }) {
  const context = useContext(AppContext);
  const setNotes = context.setNotes;
  const navigate = useNavigate();
  function handleDelete(idx) {
    const existingNotes = JSON.parse(localStorage.getItem("smart-hire"));
    existingNotes.splice(idx, 1);
    localStorage.setItem("smart-hire", JSON.stringify(existingNotes));
    setNotes(existingNotes);
  }
  function handleEdit(idx) {
    navigate("/update-note", { state: { idx: idx } });
  }
  return (
    <tr className="divide-x divide-gray-200">
      <td className="whitespace-nowrap px-4 py-4">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{title}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4">
        <div className="text-sm text-wrap text-gray-900">{content}</div>
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          {createdAt}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4">
        <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
          {updatedAt}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
        <button
          onClick={() => handleEdit(idx)}
          type="button"
          className="block rounded-md mb-1 bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          &nbsp;&nbsp;Edit&nbsp;&nbsp;
        </button>
        <button
          type="button"
          className="block rounded-md mb-1 bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={() => {
            handleDelete(idx);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Note;
