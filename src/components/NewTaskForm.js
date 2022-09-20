import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const initialFormData = {
    text: "",
    category: "Code",
  };
  const [formData, setFormData] = useState({ ...initialFormData });
  const optElements = categories.map((category, i) => {
    return (
      <option key={i} value={category}>
        {category}
      </option>
    );
  });
  function handleFormData(event) {
    let key = event.target.name;
    let value = event.target.value;
    setFormData({ ...formData, [key]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({ ...initialFormData });
  }
  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleFormData}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleFormData}
        >
          {optElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
