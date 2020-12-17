import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import WriteNotes from "./components/WriteNotes";
import NotesList from "./components/NotesList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={WriteNotes} />
        <Route path="/noteslist" component={NotesList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
