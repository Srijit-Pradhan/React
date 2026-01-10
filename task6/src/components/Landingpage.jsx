import React, { useState } from "react";
import Notespage from "./Notespage";
import EditPage from "./Editpage";

const Landingpage = () => {
  const [texts, setTexts] = useState("");
  const localData = JSON.parse(localStorage.getItem("all-notes")) || [];
  const [allnotes, setAllnotes] = useState(localData);

  const [page, setPage] = useState("home"); // home or edit
  const [editData, setEditData] = useState(null); // {index, text}

  const deletehandler = (index) => {
    const copy = [...allnotes];
    copy.splice(index, 1);
    setAllnotes(copy);
    localStorage.setItem("all-notes", JSON.stringify(copy));
  };

  const editHandler = (index) => {
    setEditData({ index, text: allnotes[index].texts });
    setPage("edit");
  };

  const saveEditedNote = (index, newText) => {
    const copy = [...allnotes];
    copy[index].texts = newText;
    setAllnotes(copy);
    setPage("home");
    localStorage.setItem("all-notes", JSON.stringify(copy));
  };

  // PAGE SWITCH
  if (page === "edit") {
    return (
      <EditPage
        editData={editData}
        save={saveEditedNote}
        goBack={() => setPage("home")}
      />
    );
  }

  // HOME PAGE
  return (
    <div className="container">
      <div className="heading">
        <h2>Daily Notes</h2>
      </div>

      <div className="input">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const copy = [...allnotes];
            copy.push({ texts });
            setAllnotes(copy);

            localStorage.setItem("all-notes", JSON.stringify(copy));

            setTexts("");
          }}
        >
          <input
            type="text"
            value={texts}
            onChange={(e) => setTexts(e.target.value)}
            placeholder="Enter your note..."
          />
          <button type="submit">Add Note</button>
        </form>
      </div>

      {allnotes.map((elem, index) => (
        <Notespage
          key={index}
          notes={elem}
          dlt={() => deletehandler(index)}
          edit={() => editHandler(index)}
        />
      ))}
    </div>
  );
};

export default Landingpage;
