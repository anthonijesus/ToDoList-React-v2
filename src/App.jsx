import React from "react";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { TaskProvider } from "./Context/TaskContext.jsx";
import styles from "./App.module.scss";

import ToDoList from "./Components/ToDoList/ToDoList.jsx";

function App() {
  // //Pasa la tarea a editar
  // const editTask = (taskId, updatedTask) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === taskId ? { ...task, ...updatedTask } : task
  //   );
  //   setTasks(updatedTasks);
  // };

  return (
    <div className={styles.container}>
      <Header />
      <TaskProvider>
        <ToDoList />
      </TaskProvider>
      <Footer />
    </div>
  );
}

export default App;
