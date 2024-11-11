import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useTask } from "../../Context/TaskContext";
import styles from "./AddToDoForm.module.scss";

const AddToDoForm = () => {
  const {
    addNewTask,
    cancelEditTask,
    taskToEdit,
    taskUpdated,
    setIsEditing,
    isEditing,
  } = useTask();
  //
  const TaskRef = useRef("");
  const DescripRef = useRef("");
  //
  //
  const [name, setName] = useState(taskToEdit.name || "");
  const [description, setDescription] = useState(taskToEdit.description || "");
  //

  useEffect(() => {
    if (taskToEdit) {
      setName(taskToEdit.name || "");
      setDescription(taskToEdit.description || "");
    }
  }, [taskToEdit]);
  //
  function updateTask() {
    const updatedTask = {
      id: taskToEdit.id,
      name: name,
      description: description,
    };

    if (updatedTask.name === "" || updatedTask.description === "") {
      alert("Hay campos vacios en el formulario");
      return;
    }
    taskUpdated(updatedTask);
    //
    setDescription("");
    setName("");
    //
    setIsEditing(false);
  }
  //
  const submitTask = (event) => {
    event.preventDefault();
    let task = {
      name: TaskRef.current.value,
      isCompleted: false,
      description: DescripRef.current.value,
      creator: "Anthoni",
    };
    if (task.name === "" || task.description === "") {
      alert("Hay campos vacios en el formulario");
      return;
    }
    addNewTask(task);

    // Reset input de la tarea
    TaskRef.current.value = "";
    DescripRef.current.value = "";
  };

  return (
    <div className={styles.formulario}>
      <form onSubmit={submitTask}>
        {!isEditing ? <h2>Agrega tus Tareas </h2> : <h2>Edita la Tareas </h2>}
        <label htmlFor="name">Nombre de la tarea</label>
        {!isEditing && <input type="text" ref={TaskRef} required />}
        {isEditing && (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        )}
        <label htmlFor="description">Descripción de la tarea</label>
        {!isEditing && <input type="text" ref={DescripRef} required />}
        {isEditing && (
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        )}
        <div>
          {!isEditing && <button type="submit">Crear Tarea</button>}
          {isEditing && (
            <>
              <button type="button" onClick={() => updateTask()}>
                Editar Tarea
              </button>
              <button type="button" onClick={cancelEditTask}>
                Cerrar
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddToDoForm;
