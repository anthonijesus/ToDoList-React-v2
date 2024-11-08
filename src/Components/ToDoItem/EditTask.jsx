import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useTask } from "../../Context/TaskContext";
import styles from "../AddToDoForm/AddToDoForm.module.scss";

const EditTask = ({ tasks, ParamsUpdateTask }) => {
  const [name, setName] = useState(tasks.name || "");
  const [description, setDescription] = useState(tasks.description || "");
  //
  const { cancelEditTask } = useTask();
  //
  useEffect(() => {
    if (tasks) {
      setName(tasks.name || "");
      setDescription(tasks.description || "");
    }
  }, [tasks]);
  //
  function updatedTask() {
    //
    const updatedTask = {
      id: tasks.id,
      name: name,
      description: description,
    };

    ParamsUpdateTask(updatedTask);
    setDescription("");
    setName("");
  }

  function CancelEdit() {
    cancelEditTask();
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
          <button type="button" onClick={updatedTask}>
            Editar Tarea
          </button>
          <button type="button" onClick={CancelEdit}>
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
