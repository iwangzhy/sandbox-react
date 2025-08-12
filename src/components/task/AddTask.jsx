import { useState } from "react";
import { useTaskDispatch } from "./TaskContext.jsx";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch();
  return (
    <>
      <input
        placeholder="add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
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
