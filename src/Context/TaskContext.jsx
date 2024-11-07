import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK":
      return action.payload;
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "CHECK_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, isCompleted: action.payload.isCompleted }
          : task
      );
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos");
        //console.log(data);
        //setTasks(data);
        dispatch({ type: "SET_TASK", payload: response.data });
      } catch (error) {
        console.log("Fallo al traer los datos de la API", error);
        //setErrorMessage("Error al traer los datos de la API");
      }
    };

    fetchTask();
  }, []);

  async function addNewTask(task) {
    //Hace la petición POST para guardar la nueva tarea
    try {
      const response = await axios.post("http://localhost:3000/todos", task);
      dispatch({ type: "ADD_TASK", payload: response.data });
      //params(response.data); // Esta linea conecta con la función renderNewTask en el ToDoList para rendizar la nueva tarea en ToDoItem
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async function removeTask(taskId) {
    try {
      await axios.delete(`http://localhost:3000/todos/${taskId}`);
      dispatch({ type: "REMOVE_TASK", payload: taskId });
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async function updateTask(taskId, updatedTask) {
    try {
      const response = await axios.put(
        `http://localhost:3000/todos/${taskId}`,
        updatedTask
      );
      dispatch({ type: "UPDATE_TASK", payload: response.data });
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async function completeTask(task) {
    //   //
    const { data } = await axios.get(`http://localhost:3000/todos/${task.id}`); // Trae la tarea con el id por parametro del server

    data.isCompleted = !data.isCompleted; // Cambia el estado de la tarea

    await axios.patch(`http://localhost:3000/todos/${task.id}`, {
      isCompleted: data.isCompleted,
    });

    // Despacha la acción con el id y el nuevo estado
    dispatch({
      type: "CHECK_TASK",
      payload: { id: task.id, isCompleted: data.isCompleted },
    });
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addNewTask, removeTask, updateTask, completeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);