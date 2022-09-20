import React from "react";

const Task = ({ text, category, handleDelete }) => {
  function handleDeletButton() {
    handleDelete(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeletButton}>
        X
      </button>
    </div>
  );
};

export default Task;
