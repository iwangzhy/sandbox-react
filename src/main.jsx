import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 初次渲染，通过 createRoot 方法创建根节点
createRoot(document.getElementById("root"))
  // 渲染 jsx 代码为 DOM 节点
  // render 会清空根节点中已经存在的 html
  .render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
