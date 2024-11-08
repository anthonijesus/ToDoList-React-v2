import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTask } from "../../Context/TaskContext.jsx";
import AddToDoForm from "../AddToDoForm/AddToDoForm.jsx";
import ToDoItem from "../ToDoItem/ToDoItem.jsx";
import EditTask from "../ToDoItem/EditTask.jsx";
import styles from "./ToDoList.module.scss";
//

const ToDoList = () => {
  const { tasks, isEditing, editTask, taskToEdit } = useTask();

  //const [tasks, setTasks] = useState([]);
  // const [taskToEdit, setTaskToEdit] = useState({});
  //const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  //Muestra o carga los datos que se van a Editar en la Tarea en el componente EditTask
  // async function editTask(taskEdited) {
  //   const taskUpdated = {
  //     id: taskEdited.id,
  //     name: taskEdited.name,
  //     description: taskEdited.description,
  //   };
  //   setTaskToEdit(taskUpdated);
  //   setIsEditing(true);
  // }

  return (
    <section className={styles.section}>
      <div className={styles.todoForm}>
        {!isEditing && <AddToDoForm />}
        {isEditing && <EditTask tasks={taskToEdit} />}
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
                //isEditing={setIsEditing}
                // completeTask={completeTask}
                // askDeleteTask={askDeleteTask}
                editTask={editTask}
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
