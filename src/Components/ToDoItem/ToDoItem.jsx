import React from "react";
import { useTask } from "../../Context/TaskContext.jsx";
import styles from "./ToDoItem.module.scss";

//
const ToDoItem = ({ task }) => {
  //
  const { completeTask, editTask, showDeleteTask } = useTask();
  //

  return (
    <tbody>
      <tr className={task.isCompleted ? styles.completed : ""}>
        <td className={styles.acciones}>
          <input
            type="checkbox"
            onClick={() => completeTask(task)}
            checked={task.isCompleted}
            readOnly
          />
          <button onClick={() => showDeleteTask(task)}>Borrar</button>
          <button onClick={() => editTask(task)}>Editar</button>
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
