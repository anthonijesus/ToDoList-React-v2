import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTask } from "../../Context/TaskContext.jsx";
import AddToDoForm from "../AddToDoForm/AddToDoForm.jsx";
import ToDoItem from "../ToDoItem/ToDoItem.jsx";
import EditTask from "../ToDoItem/EditTask.jsx";
import styles from "./ToDoList.module.scss";
//

const ToDoList = () => {
  const {
    tasks,
    isEditing,
    isDeleting,
    setIsDeleting,
    removeTask,
    taskToDelete,
  } = useTask();

  function deleteTask(id) {
    removeTask(id);
    setIsDeleting(false);
  }

  return (
    <section className={styles.section}>
      <div className={styles.todoForm}>
        {!isEditing && <AddToDoForm />}
        {isEditing && <EditTask />}
      </div>
      <div className={styles.todoList}>
        <div className={styles.listado}>
          <h2>Lista de Tareas</h2>
          {!isDeleting && (
            <table>
              <thead>
                <tr>
                  <th>Acciones</th>
                  <th>Tarea</th>
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th>Creador</th>
                </tr>
              </thead>
              {tasks.map((task) => (
                <ToDoItem key={task.id} task={task} />
              ))}
            </table>
          )}

          {isDeleting && (
            <div className={styles.deleteTask}>
              <h4>Desea Borrar la tarea?</h4>
              <h5>{taskToDelete.name}</h5>
              <div>
                <button onClick={() => deleteTask(taskToDelete.id)}>SI</button>
                <button onClick={() => setIsDeleting(false)}>NO</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToDoList;
