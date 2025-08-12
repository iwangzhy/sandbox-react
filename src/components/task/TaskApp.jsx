import { TaskProvider } from "./TaskContext.jsx";
import TaskList from "./TaskList.jsx";
import AddTask from "./AddTask.jsx";

export default function TaskApp() {
  return (
    <TaskProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}
