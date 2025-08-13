# useMemo hook

[https://zh-hans.react.dev/reference/react/useMemo](https://zh-hans.react.dev/reference/react/useMemo)

useMemo 是一个 React Hook，它在每次重新渲染的时候能够**缓存计算的结果**。

React Compiler 会自动对值和函数进行记忆化处理，从而减少手动调用 useMemo 的需求。

## 语法

```js
useMemo(calculateValue, dependencies);
```

同样的，useMemo 需要在组件的顶层调用。

```jsx
function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => {
    // filterTodos 是一个比较昂贵的操作。
    return filterTodos(todos, tab)
  }, [todos, tab])
}
```

### calculateValue

需要缓存计算值的函数。它应该是一个没有任何参数的纯函数，并且可以返回任意类型。

React 将会在首次渲染时调用该函数；在之后的渲染中，如果 dependencies 没有发送变化，React 将直接返回缓存的结果。