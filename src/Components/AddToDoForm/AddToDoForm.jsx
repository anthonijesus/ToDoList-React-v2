import React, { useEffect } from "react";
import { useRef } from "react";
import { useTask } from "../../Context/TaskContext";
import styles from "./AddToDoForm.module.scss";

const AddToDoForm = () => {
  const {
    addNewTask,
    taskToEdit,
    taskUpdated,
    setIsEditing,
    isEditing,
    isDeleting,
  } = useTask();
  //
  const TaskRef = useRef("");
  const DescripRef = useRef("");
  //

  useEffect(() => {
    if (isEditing && taskToEdit) {
      TaskRef.current.value = taskToEdit.name || "";
      DescripRef.current.value = taskToEdit.description || "";
    }
  }, [isEditing, taskToEdit]);
  //
  useEffect(() => {
    if (isDeleting) {
      TaskRef.current.value = "";
      DescripRef.current.value = "";
    }
  }, [isDeleting]);
  //
  function updateTask() {
    const updatedTask = {
      id: taskToEdit.id,
      name: TaskRef.current.value,
      description: DescripRef.current.value,
    };

    if (updatedTask.TaskRef === "" || updatedTask.DescripRef === "") {
      alert("Hay campos vacios en el formulario");
      return;
    }

    taskUpdated(updatedTask);
    //
    TaskRef.current.value = "";
    DescripRef.current.value = "";
    //
    setIsEditing(false);
  }
  //

  const cancelEditTask = () => {
    TaskRef.current.value = "";
    DescripRef.current.value = "";
    setIsEditing(false);
  };
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

    TaskRef.current.value = "";
    DescripRef.current.value = "";
  };

  return (
    <div className={styles.formulario}>
      <form onSubmit={submitTask}>
        {!isEditing ? <h2>Agrega tus Tareas </h2> : <h2>Edita la Tareas </h2>}
        <label htmlFor="name">Nombre de la tarea</label>
        <input type="text" ref={TaskRef} required />
        <label htmlFor="description">Descripción de la tarea</label>
        <input type="text" ref={DescripRef} required />
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
