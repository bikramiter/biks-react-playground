import { Link } from "react-router-dom";
import type { Task } from "../types/task";
import TaskRow from "./TaskRow";

type TasksProps = {
  tasks: Task[];
};

export default function Tasks({ tasks }: TasksProps) {
  return (
    <>
      <h1>All Tasks</h1>
      <Link className="new-task-link" to="/new-task">
        + New Task
      </Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </>
  );
}
