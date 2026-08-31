export type Task = {
  id: number;
  title: string;
  description?: string;
  status: "new" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
};
