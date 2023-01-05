import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function holdNoteValue(event) {
    //get name & value of target element
    //it will be either title input or content textArea
    const { name, value } = event.target;

    setNote((preValue) => {
      //return object with previous value but overwrite given element value
      return { ...preValue, [name]: value };
    });
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          //call parent onAdd function to save note in notes array
          props.onAdd(note);
          //after adding note in notes array; clear note field for new entry
          setNote({
            title: "",
            content: "",
          });
          e.preventDefault();
        }}
      >
        <input
          onChange={holdNoteValue}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={holdNoteValue}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
