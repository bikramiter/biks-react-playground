import "./App.css";
import { tasks as initialTasks } from "./data/tasks";
import Tasks from "./components/Tasks";
import { Navigate, Route, Routes } from "react-router-dom";
import TaskDetails from "./pages/TaskDetails";
import CreateTask from "./pages/CreateTask";
import { useEffect, useState } from "react";
import type { Task } from "./types/task";

function App() {
  const [allTasks, setAllTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  function handleAddTask(newTask: Task) {
    setAllTasks((prevTasks) => [...prevTasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);

  return (
    <Routes>
      <Route index element={<Navigate to="/tasks" replace />} />
      <Route path="/tasks" element={<Tasks tasks={allTasks} />} />
      <Route path="/tasks/:taskId" element={<TaskDetails tasks={allTasks} />} />
      <Route
        path="/new-task"
        element={
          <CreateTask
            onAddTask={handleAddTask}
            nextTaskId={allTasks.length + 1}
          />
        }
      />
    </Routes>
  );
}

export default App;
