import Task from "./Task";

const TaskList = ({ tasks, handleDelete }) => {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          category={task.category}
          text={task.text}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
