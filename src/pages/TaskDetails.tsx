import { Link, useParams } from "react-router-dom";
import { tasks } from "../data/tasks";
import { priorityLabels, statusLabels } from "../utils/taskLabels";

export default function TaskDetails() {
  const { taskId } = useParams();
  const taskDetails = tasks.find((task) => task.id === Number(taskId));
  return (
    <div className="task-details">
      <h1>Task Details</h1>

      <p>Task Id: {taskId}</p>

      {taskDetails ? (
        <>
          <p>
            <span className="task-details-label">Title:</span>{" "}
            {taskDetails.title}
          </p>

          <p>
            <span className="task-details-label">Description:</span>{" "}
            {taskDetails.description}
          </p>

          <p>
            <span className="task-details-label">Priority:</span>{" "}
            {priorityLabels[taskDetails.priority]}
          </p>

          <p>
            <span className="task-details-label">Status:</span>{" "}
            {statusLabels[taskDetails.status]}
          </p>
        </>
      ) : (
        <p>Task not found.</p>
      )}

      <Link className="back-link" to="/tasks">
        ← Back to All Tasks
      </Link>
    </div>
  );
}
