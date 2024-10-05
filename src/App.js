import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import NoteList from './components/NoteList';
import SearchNotes from './components/SearchNotes';

function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-10 sm:w-full px-5 lg:w-4/5">
        <SearchNotes />
        <Form />
        <NoteList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
