import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import WriteNotes from "./components/WriteNotes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={WriteNotes} />
      </div>
    </BrowserRouter>
  );
}

export default App;
