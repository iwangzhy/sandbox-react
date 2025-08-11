// import "./App.css";
import "./styles.css";
import { TasksProvider } from "./contexts/TaskContext";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  return (
    /*
      在所有的 context 和 reducer 连接部分都在 TasksContext.js 中。
      这保持了组件的干净和整洁，让我们专注于它们显示的内容，而不是它们从哪里获得数据：
    */
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

export default App;
