import React from "react";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((t) => (
        t.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : t
      ))
      setTaskList(updatedTaskList);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setTask({});
      e.target.reset();
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add task"
          maxLength="25"
          value={task.name || ""}
          onChange={e => setTask({...task, name: e.target.value})}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
