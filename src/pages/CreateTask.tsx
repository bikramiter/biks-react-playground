import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Task } from "../types/task";

type CreateTaskFormData = {
  title: string;
  description: string;
  priority: Task["priority"];
};

type CreateTaskProps = {
  onAddTask: (task: Task) => void;
  nextTaskId: number;
};

export default function CreateTask({ onAddTask, nextTaskId }: CreateTaskProps) {
  const [formData, setFormData] = useState<CreateTaskFormData>({
    title: "",
    description: "",
    priority: "medium",
  });
  const navigate = useNavigate();

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onAddTask({ id: nextTaskId, ...formData, status: "new" });
    navigate("/tasks");
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <h1>Create Task</h1>

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
    </>
  );
}
