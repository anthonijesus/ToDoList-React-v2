import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTask } from "../../Context/TaskContext.jsx";
import AddToDoForm from "../AddToDoForm/AddToDoForm.jsx";
import ToDoItem from "../ToDoItem/ToDoItem.jsx";
import EditTask from "../ToDoItem/EditTask.jsx";
import styles from "./ToDoList.module.scss";
//

const ToDoList = () => {
  const { tasks } = useTask();
  //
  //const [tasks, setTasks] = useState([]);
  // const [taskToEdit, setTaskToEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  // const [isDeletingTask, setIsDeletingTask] = useState(); //captura el id de la tarea a borrar
  // const [errorMessage, setErrorMessage] = useState("");

  //
  // useEffect(() => {
  //   const fetchTask = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:3000/todos");
  //       //console.log(data);
  //       setTasks(data);
  //     } catch (error) {
  //       console.log(error);
  //       setErrorMessage("Error al traer los datos de la API");
  //     }
  //   };

  //   fetchTask();
  // }, []);
  //

  //Pasa la tarea a addToDoForm para renderizarla en la lista de tarea (ToDoItem)
  // const renderNewTask = (task) => {
  //   setTasks([...tasks, task]);
  // };

  //Elimina la Tarea
  // async function askDeleteTask(task) {
  //   //console.log(taskId);
  //   setIsEditing(false);
  //   setIsDeleting(true);
  //   setIsDeletingTask(task);
  // }
  //
  // async function deleteTask(taskId) {
  //   await axios.delete(`http://localhost:3000/todos/${taskId}`);

  //   // Actualiza el estado `tasks` con la tarea eliminada
  //   setTasks((previousTasks) =>
  //     previousTasks.filter((task) => task.id !== taskId)
  //   );

  //   setIsDeleting(false);
  // }
  //

  //Muestra o carga los datos que se van a Edita en la Tarea en el componente EditTask
  // async function editTask(taskEdited) {
  //   const taskUpdated = {
  //     id: taskEdited.id,
  //     name: taskEdited.name,
  //     description: taskEdited.description,
  //   };
  //   setTaskToEdit(taskUpdated);
  //   setIsEditing(true);
  // }

  //Actualiza en el server la tarea
  // async function updateTask(updatedTask) {
  //   //console.log(updatedTask);
  //   await axios.patch(
  //     `http://localhost:3000/todos/${updatedTask.id}`,
  //     updatedTask
  //   );

  //   // Actualiza el estado `tasks` con la lista modificada
  //   setTasks((previousTasks) =>
  //     previousTasks.map((task) =>
  //       task.id === updatedTask.id ? { ...task, ...updatedTask } : task
  //     )
  //   );

  //   setIsEditing(false); //oculata el formulario de edición cuando se haya actualizado la tarea
  // }

  // esta funcion se pasa por parametro al componente editTask para luego volver a renderizar el componente addToDoForm en caso que se haga click en cancelar
  // const cancelEditTask = () => {
  //   setIsEditing(false);
  // };

  //Marca checked la tarea a completada
  // async function completeTask(taskId) {
  //   //
  //   const { data } = await axios.get(`http://localhost:3000/todos/${taskId}`); // Trae la tarea con el id por parametro del server

  //   data.isCompleted = !data.isCompleted; // Cambia el estado de la tarea

  //   await axios.patch(`http://localhost:3000/todos/${taskId}`, {
  //     isCompleted: data.isCompleted,
  //   }); // Actualiza en el servidor

  //   // Actualiza el estado `tasks` con la lista modificada
  //   setTasks((previousTasks) =>
  //     previousTasks.map((task) =>
  //       task.id === taskId ? { ...task, isCompleted: data.isCompleted } : task
  //     )
  //   );
  // }
  //

  return (
    <section className={styles.section}>
      <div className={styles.todoForm}>
        {!isEditing && <AddToDoForm />}
        {isEditing && (
          <EditTask
            params={taskToEdit}
            ParamsCancelEdit={cancelEditTask}
            ParamsUpdateTask={updateTask}
          />
        )}
      </div>
      <div className={styles.todoList}>
        <div className={styles.listado}>
          <h2>Lista de Tareas</h2>
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
              <ToDoItem
                key={task.id}
                task={task}
                // completeTask={completeTask}
                // askDeleteTask={askDeleteTask}
                // editTask={editTask}
              />
            ))}
          </table>
          {/* {isDeleting && (
            <div className={styles.deleteTask}>
              <h4>Desea Borrar la tarea?</h4>
              <h5>{isDeletingTask.name}</h5>
              <div>
                <button onClick={() => deleteTask(isDeletingTask.id)}>
                  SI
                </button>
                <button onClick={() => setIsDeleting(false)}>NO</button> *
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
    // <section className={styles.section}>
    //   <div className={styles.todoForm}>
    //     {!isEditing && <AddToDoForm params={renderNewTask} />}
    //     {isEditing && (
    //       <EditTask
    //         params={taskToEdit}
    //         ParamsCancelEdit={cancelEditTask}
    //         ParamsUpdateTask={updateTask}
    //       />
    //     )}
    //   </div>
    //   <div className={styles.todoList}>
    //     <div className={styles.listado}>
    //       <h2>Lista de Tareas</h2>
    //       <table>
    //         <thead>
    //           <tr>
    //             <th>Acciones</th>
    //             <th>Tarea</th>
    //             <th>Descripción</th>
    //             <th>Estado</th>
    //             <th>Creador</th>
    //           </tr>
    //         </thead>

    //         {!isDeleting &&
    //           tasks.map((task) => (
    //             <ToDoItem
    //               key={task.id}
    //               task={task}
    //               // completeTask={completeTask}
    //               // askDeleteTask={askDeleteTask}
    //               // editTask={editTask}
    //             />
    //           ))}
    //       </table>
    //       {isDeleting && (
    //         <div className={styles.deleteTask}>
    //           <h4>Desea Borrar la tarea?</h4>
    //           <h5>{isDeletingTask.name}</h5>
    //           <div>
    //             <button onClick={() => deleteTask(isDeletingTask.id)}>
    //               SI
    //             </button>
    //             <button onClick={() => setIsDeleting(false)}>NO</button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </section>
  );
};

export default ToDoList;
