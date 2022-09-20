import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );
  const newTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={newTask}
      />
      <TaskList tasks={visibleTasks} handleDelete={deleteTask} />
    </div>
  );
};

export default App;
