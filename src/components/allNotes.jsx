import { useContext, useState } from "react";
import { AppContext } from "../App";
import Note from "./Note";
import NotfoundPage from "./404";

function Notes() {
  const context = useContext(AppContext);
  const notes = context.notes;
  const [pages, setPages] = useState([0, 10]); //startingIndex and endingIndex
  function handlePrevious() {
    setPages((prevPage) => {
      if (prevPage[0] - 10 < 0) {
        return prevPage;
      } else {
        return [prevPage[0] - 10, prevPage[1] - 10];
      }
    });
  }
  function handleNext() {
    setPages((prevPage) => {
      if (prevPage[0] + 10 > notes.length) {
        return prevPage;
      } else {
        return [prevPage[0] + 10, prevPage[1] + 10];
      }
    });
  }
  return (
    <>
      {notes.length ? (
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h2 className="text-lg font-semibold">Notes</h2>
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-gray-200">
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          <span>Title</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Content
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Created At
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Edited At
                        </th>
                        <th scope="col" className="relative px-4 py-3.5">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {notes.slice(pages[0], pages[1]).map((note, idx) => (
                        <Note
                          key={idx}
                          idx={idx}
                          title={note.title}
                          content={note.content}
                          createdAt={note.createdAt}
                          updatedAt={note.updatedAt}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full border-gray-300">
            <div className="mt-2 flex items-center justify-end">
              <div className="space-x-2">
                <button
                  onClick={handlePrevious}
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  ← Previous
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <NotfoundPage />
      )}
    </>
  );
}

export default Notes;
