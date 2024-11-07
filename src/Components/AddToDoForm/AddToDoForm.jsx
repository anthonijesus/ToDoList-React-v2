//import React from "react";
import { useRef } from "react";
import { useTask } from "../../Context/TaskContext";
import styles from "./AddToDoForm.module.scss";
//import axios from "axios";

const AddToDoForm = () => {
  const { addNewTask } = useTask();

  const TaskRef = useRef("");
  const DescripRef = useRef("");

  const submitTask = (event) => {
    event.preventDefault();
    let task = {
      name: TaskRef.current.value,
      isCompleted: false,
      description: DescripRef.current.value,
      creator: "Anthoni",
    };
    addNewTask(task);

    // Reset input de la tarea
    TaskRef.current.value = "";
    DescripRef.current.value = "";
  };

  return (
    <div className={styles.formulario}>
      <img src={"/todolistimage.jpg"} alt="image" className={styles.imagen} />
      <form onSubmit={submitTask}>
        <h2>Agrega tus Tareas </h2>
        <label htmlFor="name">Nombre de la tarea</label>
        <input type="text" ref={TaskRef} required />
        <label htmlFor="description">Descripción de la tarea</label>
        <input type="text" ref={DescripRef} required />
        <div>
          <button type="submit">Crear Tarea</button>
        </div>
      </form>
    </div>
  );
};

export default AddToDoForm;
