import "./App.css";
import { tasks } from "./data/tasks";
import Tasks from "./components/Tasks";

function App() {
  return <Tasks tasks={tasks} />;
}

export default App;
