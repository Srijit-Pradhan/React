import React from "react";

const Notespage = ({ notes, dlt, edit }) => {
  return (
    <div className="note-card">
      <p className="note-text">{notes.texts}</p>

      <div className="buttons">
        <button onClick={edit}>Edit</button>
        <button onClick={dlt}>Delete</button>
      </div>
    </div>
  );
};

export default Notespage;
