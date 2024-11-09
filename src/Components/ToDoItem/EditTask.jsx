import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useTask } from "../../Context/TaskContext";
import styles from "../AddToDoForm/AddToDoForm.module.scss";

const EditTask = () => {
  const { cancelEditTask, taskToEdit, taskUpdated, setIsEditing } = useTask();
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

  //
  function updateTask() {
    const updatedTask = {
      id: taskToEdit.id,
      name: name,
      description: description,
    };
    taskUpdated(updatedTask);
    setDescription("");
    setName("");
    setIsEditing(false);
  }

  return (
    <div className={styles.formulario}>
      <img src={"/todolistimage.jpg"} alt="image" className={styles.imagen} />
      <form>
        <h2>Edita la Tarea</h2>
        <label htmlFor="name">Nombre de la tarea</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        />
        <label htmlFor="description">Descripción de la tarea</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          required
        />
        <div style={{ display: "flex", gap: "5px" }}>
          <button type="button" onClick={() => updateTask()}>
            Editar Tarea
          </button>
          <button type="button" onClick={cancelEditTask}>
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
