import React, { useState } from "react";

const EditPage = ({ editData, save, goBack }) => {
  const [updatedText, setUpdatedText] = useState(editData.text);

  return (
    <div className="edit-container">
      <h2>Edit Note</h2>

      <input
        type="text"
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
      />

      <p className="preview-title">Live Preview:</p>

      <div className="preview-box">{updatedText}</div>

      <div className="edit-buttons">
        <button className="save-btn" onClick={() => save(editData.index, updatedText)}>
          Save
        </button>

        <button className="back-btn" onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default EditPage;
