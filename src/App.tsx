import "./App.css";
import { tasks as initialTasks } from "./data/tasks";
import Tasks from "./components/Tasks";
import { Navigate, Route, Routes } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import { useEffect, useState } from "react";
import type { Task } from "./types/task";
import TaskDetails from "./pages/TaskDetails";

function App() {
  const [allTasks, setAllTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  function handleAddTask(newTask: Task) {
    setAllTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleEditTask(updatedTask: Task) {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);

  const nextTaskId =
    allTasks.length === 0
      ? 1
      : Math.max(...allTasks.map((task) => task.id)) + 1;

  return (
    <Routes>
      <Route index element={<Navigate to="/tasks" replace />} />
      <Route path="/tasks" element={<Tasks tasks={allTasks} />} />
      <Route path="/tasks/:taskId" element={<TaskDetails tasks={allTasks} />} />
      <Route
        path="/tasks/:taskId/edit"
        element={<EditTask tasks={allTasks} onEditTask={handleEditTask} />}
      />
      <Route
        path="/new-task"
        element={
          <CreateTask onAddTask={handleAddTask} nextTaskId={nextTaskId} />
        }
      />
    </Routes>
  );
}

export default App;
