import { Link } from "react-router-dom";
import type { Task } from "../types/task";
import { priorityLabels, statusLabels } from "../utils/taskLabels";

type TaskRowProps = {
  task: Task;
};

export default function TaskRow({ task }: TaskRowProps) {
  return (
    <tr>
      <td>
        <Link className="task-title" to={`/tasks/${task.id}`}>
          {task.title}
        </Link>
      </td>
      <td>{priorityLabels[task.priority]}</td>
      <td>{statusLabels[task.status]}</td>
    </tr>
  );
}
