import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);
/*
   在所有的 context 和 reducer 连接部分都在 TasksContext.js 中。
   这保持了组件的干净和整洁，让我们专注于它们显示的内容，而不是它们从哪里获得数据：
 */
export function TasksProvider({ children }) {
  // 创建一个 reducer， 将 tasks 的修改逻辑集中起来，
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    /* TasksContext 提供 tasks state*/
    /* TasksDispatchContext 提供 dispatch 函数，即修改 tasks 的方法 */
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unkonw action:" + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
