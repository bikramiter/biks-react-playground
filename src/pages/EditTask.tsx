import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Task } from "../types/task";

type EditTaskProps = {
  tasks: Task[];
  onEditTask: (task: Task) => void;
};

export default function EditTask({ tasks, onEditTask }: EditTaskProps) {
  const { taskId } = useParams();

  const taskDetails = tasks.find((task) => task.id === Number(taskId));

  const navigate = useNavigate();

  const [formData, setFormData] = useState<Task | null>(taskDetails ?? null);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (!prev) return null;

      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData) {
      return;
    }

    onEditTask(formData);
    navigate("/tasks");
  }

  if (!taskDetails || !formData) {
    return (
      <div className="task-details">
        <h1>Edit Task</h1>
        <p>Task not found.</p>

        <Link className="back-link" to="/tasks">
          ← Back to All Tasks
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Task</h1>

      <form className="task-form" onSubmit={handleSubmit}>
        <div className="task-form-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="task-form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="task-form-field">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="new">New</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="task-form-field">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="task-form-actions">
          <button type="submit">Save</button>
        </div>
      </form>

      <Link className="cancel-link" to="/tasks">
        Cancel
      </Link>
    </div>
  );
}
