import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((preValue) => {
      //return previous notes plus new note //added new note in notes
      console.log([...preValue, note]);
      return [...preValue, note];
    });
  }

  function deleteNote(index) {
    setNotes((preValue) => {
      //filter previous notes to delete given note
      return preValue.filter((val, ind) => {
        //return all notes where index is not equal to given index
        //means: exclude/delete note from notes for given index
        return ind !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        //render notes array in Note element
        notes.map((note, index) => {
          return (
            <Note
              onDelet={deleteNote}
              key={index}
              index={index}
              title={note.title}
              content={note.content}
            />
          );
        })
      }
      <Footer />
    </div>
  );
}

export default App;
