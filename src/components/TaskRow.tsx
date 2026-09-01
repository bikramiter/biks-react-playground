import type { Task } from "../types/task";

const statusLabels: Record<Task["status"], string> = {
  new: "New",
  "in-progress": "In Progress",
  completed: "Completed",
};

const priorityLabels: Record<Task["priority"], string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

type TaskRowProps = {
  task: Task;
};

export default function TaskRow({ task }: TaskRowProps) {
  return (
    <tr>
      <td>
        <a className="task-title" href={`/tasks/${task.id}`}>
          {task.title}
        </a>
      </td>
      <td>{priorityLabels[task.priority]}</td>
      <td>{statusLabels[task.status]}</td>
    </tr>
  );
}
