import React from "react";
import { useTask } from "../../Context/TaskContext.jsx";
import styles from "./ToDoItem.module.scss";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
//
const ToDoItem = ({ task }) => {
  //
  const { tasks, removeTask, completeTask, editTask, showDeleteTask } =
    useTask();
  //
  function checkTask(task) {
    completeTask(task);
  }

  // function deleteTask(task) {
  //   removeTask(task);
  // }

  function showEditTask(task) {
    //console.log(task);
    editTask(task);
  }
  return (
    <tbody>
      <tr className={task.isCompleted ? styles.completed : ""}>
        <td className={styles.acciones}>
          <input
            type="checkbox"
            onClick={() => checkTask(task)}
            checked={task.isCompleted}
            readOnly
          />
          <button onClick={() => showDeleteTask(task)}>
            <FaTrash />
          </button>
          <button onClick={() => showEditTask(task)}>
            <FaEdit />
          </button>
        </td>
        <td>{task.name}</td>
        <td>{task.description}</td>
        <td>{task.isCompleted ? "Completada" : "Pendiente"}</td>
        <td>{task.creator}</td>
      </tr>
    </tbody>
  );
};

export default ToDoItem;
