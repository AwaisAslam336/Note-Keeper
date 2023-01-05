import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          //call parent onDelet function and pass note's index
          props.onDelet(props.index);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
