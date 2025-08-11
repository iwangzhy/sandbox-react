import { useState } from "react";
import { useTasksDispatch } from "../contexts/TaskContext.jsx";

export default function AddTask() {
  // text 是组件内部的 state
  const [text, setText] = useState("");

  // 使用父组件的 context
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="add task"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
let nextId = 3;
