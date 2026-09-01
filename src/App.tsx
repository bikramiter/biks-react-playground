import "./App.css";
import { tasks } from "./data/tasks";
import Tasks from "./components/Tasks";
import { Route, Routes } from "react-router-dom";
import TaskDetails from "./pages/TaskDetails";

function App() {
  return (
    <Routes>
      <Route path="/tasks" element={<Tasks tasks={tasks} />} />
      <Route path="/tasks/:taskId" element={<TaskDetails />} />
    </Routes>
  );
}

export default App;
