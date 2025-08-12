# React Context

## createContext

React 通过 createContext 来创建组件可以**读写**的上下文(context)。

```jsx
import { createContext } from 'react'

const SomeContext = createContext(defaultValue);
```

defaultValue: 当读取上下文的组件上方的树中没有匹配的上下文时，希望该上下文具有的默认值。

createContext 返回一个上下文对象。**该上下文对象本身不包含任何信息。** 它值表示其他组件读取或提供的那个上下文。

具体用法：

- `<SomeContext value={}>` 为其子组件提供上下文的值。 (React 19 之前使用 `<SomeContext.Provider>`)
- 子组件通过 `useContext(SomeContext)` 来获取上下文的值。(React 19 之前使用 `<SomeContext.Consumer>`)

## useContext

useContext 是一个 React Hook，可以让你读取和订阅组件中的 context。

语法: `const value = useContext(SomeContext)`

- 在组件的顶层调用 `useContext` 来读取和订阅 context。**为什么是组件的顶层呢？因为 hook只能在 React 组件顶层调用**
- `SomeContext` 是通过 `createContext` 创建 `context` 的返回值。
- `useContext` 的返回值是 **从当前组件开始 `向上` 查找最近的 SomeContext(Context Provider) 所提供的 value props 的值。**
  如果没有找到，那么就是 `createContext` 所传递的 `defaultValue`
- **如果 context 发生变化，React 会自动重新渲染读取 context 的组件。**

通过 context 更新传递的数据（**需要与 state 结合使用**）即将 state 通过 Context.Provider 传递给子组件。

```jsx
function MyPage() {
  // 创建一个 state
  const [theme, setTheme] = useState('dark');
  return (
    // 通过 Context.Provider 传递给子组件
    <ThemeContext value={theme}>
      <Form/>
      <Button onClick={() => {
        setTheme('light');
      }}>
        Switch to light theme
      </Button>
    </ThemeContext>
  );
}
```

1. Context.Provider 提供一个 state 变量
2. Context.Provider 提供 state变量和 setState 方法
3. 同时使用多个 Context
4. 把 provider 抽离成主键
5. 使用 context 与 reducer 结合起来

## 案例

### 案例1

创建上下文

```jsx
// Contexts.js
import { createContext } from 'react';

export const ThemeContext = createContext('light');
export const AuthContext = createContext(null);
```

提供上下文

```jsx
// App.js
function App() {
  const [theme, setTheme] = useState('dark');
  const [currentUser, setCurrentUser] = useState({ name: 'Taylor' });

  // ...

  return (
    // ThemeContext 通过 theme 上下文
    <ThemeContext value={theme}>
      {/* AuthContext 提供 currentUser 上下文 */}
      <AuthContext value={currentUser}>
        <Page/>
      </AuthContext>
    </ThemeContext>
  );
}
```

获取上下文

```jsx
// Button.js
function Button() {
  const theme = useContext(ThemeContext);
  // ...
}

// Profile.js
function Profile() {
  const currentUser = useContext(AuthContext);
  // ...
}
```

### 案例2 provider + reducer

**将 createContext 与 useReducer 的逻辑写在一个 context.js 文件中，在这个文件中可以通过 export const useXxxx =
useContext(xxx) 来实现自定义 hook**

```jsx
// TaskContext.js
import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext(null);

const TaskDispatchContext = createContext(null);

export function TaskProvider({ children }) {
  // useReducer hook
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    // 使用多个 Context.Provider
    <TaskContext value={tasks}>
      <TaskDispatchContext value={dispatch}>{children}</TaskDispatchContext>
    </TaskContext>
  );
}

// 自定义 hook
export function useTasks() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}

// reducer 函数
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
      throw Error("Unknown action: " + action.type);
    }
  }
}

// state 初始值
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
```




