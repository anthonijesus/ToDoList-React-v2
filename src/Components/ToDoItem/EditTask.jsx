import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "../AddToDoForm/AddToDoForm.module.scss";

const EditTask = ({ params, ParamsCancelEdit, ParamsUpdateTask }) => {
  const [name, setName] = useState(params.name || "");
  const [description, setDescription] = useState(params.description || "");

  //
  useEffect(() => {
    if (params) {
      setName(params.name || "");
      setDescription(params.description || "");
    }
  }, [params]);
  //
  function updatedTask() {
    //
    const updatedTask = {
      id: params.id,
      name: name,
      description: description,
    };

    ParamsUpdateTask(updatedTask);
    setDescription("");
    setName("");
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
          <button type="button" onClick={ParamsCancelEdit}>
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
