import React from "react";
import Header from "./components/Keeper/header/Header";
import "./App.css";
import Container from "./components/Keeper/container/Container";
import notes from "./data/notes.json";
import Note from "./components/Keeper/note/Note";

function App() {
  return (
    <div className="app">
      <Header />
      <Container>
        {notes.map((note, key) => (
          <Note key={key} title={note.title} content={note.content} />
        ))}
      </Container>
    </div>
  );
}

export default App;
