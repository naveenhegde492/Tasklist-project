import React from "react";

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {

  const handleEdit = (id) => {
    const taskToEdit = taskList.find((t) => t.id === id);
    setTask(taskToEdit);
  }

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((t) => t.id !== id);
    setTaskList(newTaskList);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
      </div>
      <ul>
        {taskList.map((t) => (
          <li key={t.id}>
            <p>
              <span className="name">{t.name}</span>
              <span className="time">{t.time}</span>
            </p>
            <i onClick={() => handleEdit(t.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDelete(t.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
