import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../../redux/notes/notesSlice';

function NoteList() {
  const filterText = useSelector((state) => state.notes.searchNote);
  const filterColor = useSelector((state) => state.notes.filterColor);
  const notes = useSelector((state) => state.notes.items);

  const dispatch = useDispatch();

  let filteredNotes = notes?.filter(
    (note) =>
      (note.title.toLowerCase().includes(filterText.toLowerCase()) &&
        note.color.toLowerCase().includes(filterColor.toLowerCase())) ||
      (note.title.toLowerCase().includes(filterText.toLowerCase()) &&
        note.color.toLowerCase().includes(filterColor.toLowerCase()))
  );

  console.log(filterColor);
  console.log(filteredNotes);

  return (
    <div className="w-full flex flex-wrap items-center">
      {filteredNotes?.length <= 0 && (
        <span className="text-red-700 font-bold">
          Kayıtlı not bulunamamıştır...
        </span>
      )}
      {filteredNotes?.map((note) => (
        <div
          key={note.id}
          className="w-auto relative md:w-96 lg:w-[332px] p-6 mr-3 mb-3 border border-gray-200 rounded-lg shadow"
        >
          <span
            className="absolute right-0 top-0 m-3 h-5 w-5 rounded-full flex justify-center items-center"
            style={{ backgroundColor: note.color }}
          ></span>
          <a href="/#">
            <h5 className="mb-2 text-2xl font-bold tracking-tigh">
              {note.title}
            </h5>
          </a>
          <p className="mb-3 font-normal">{note.description}</p>
          <button
            onClick={() => dispatch(deleteNote(note.id))}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
