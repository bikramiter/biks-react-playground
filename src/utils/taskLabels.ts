import type { Task } from "../types/task";

export const statusLabels: Record<Task["status"], string> = {
  new: "New",
  "in-progress": "In Progress",
  completed: "Completed",
};

export const priorityLabels: Record<Task["priority"], string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};
