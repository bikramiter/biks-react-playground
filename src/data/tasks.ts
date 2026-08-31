import type { Task } from "../types/task";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Set up project structure",
    description: "Create the initial React and TypeScript project structure.",
    status: "completed",
    priority: "high",
  },
  {
    id: 2,
    title: "Design dashboard layout",
    description: "Create the initial layout for the TeamFlow dashboard.",
    status: "in-progress",
    priority: "high",
  },
  {
    id: 3,
    title: "Create task management UI",
    description: "Build the interface for viewing and managing tasks.",
    status: "new",
    priority: "high",
  },
  {
    id: 4,
    title: "Add task filtering",
    description: "Allow users to filter tasks by status and priority.",
    status: "new",
    priority: "medium",
  },
  {
    id: 5,
    title: "Review accessibility",
    status: "new",
    priority: "medium",
  },
  {
    id: 6,
    title: "Add automated tests",
    description: "Add tests for the core task management workflows.",
    status: "new",
    priority: "low",
  },
];
