import { useDispatch, useSelector } from 'react-redux';
import { filterColorHandle, filterNote } from '../../redux/notes/notesSlice';

function SearchNotes() {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.notes.searchNote);
  const notes = useSelector((state) => state.notes.items);

  console.log(notes);

  const colors = ['#ec4899', '#a855f7', '#eab308', '#3b82f6', '#22c55e'];

  return (
    <div className="">
      <h1 className="text-6xl m-4 text-center">Note-App with Redux</h1>
      <form>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative flex justify-between">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <div className="flex relative w-3/4 mr-3">
            <input
              type="search"
              id="search"
              className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              onChange={(e) => dispatch(filterNote(e.target.value))}
              value={filterText}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
          <div className="flex relative items-center">
            <form>
              <select
                onChange={(e) => dispatch(filterColorHandle(e.target.value))}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className={`bg-white w-full`} value={''}>
                  Renk Seçiniz...
                </option>
                {colors.map((note, id) => (
                  <option
                    key={id}
                    className={`rounded-full h-3 w-3`}
                    value={note}
                    style={{ color: note }}
                  >
                    {note}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchNotes;
