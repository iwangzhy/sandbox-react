// export default function App() {
//   const [theme, setTheme] = useState("light");
//   const [currentUser, setCurrentUser] = useState(null);
//
//   return (
//     /* Context.Provider 提供的是一个 state ，state 变化时，会触发 react 重新渲染组件*/
//     <ThemeContext value={theme}>
//       {/* 对象属性简写方式，如果变量名与属性名相同时， es6 允许简写 */}
//       <CurrentUserContext value={{ currentUser, setCurrentUser }}>
//         {/*在 WelcomePanel 内部读取 ThemeContext、CurrentUserContext 的值 */}
//         <WelcomePanel />
//         {/* 通过 label 标签内部的input 勾选框来修改 theme state */}
//         <label>
//           <input
//             type="checkbox"
//             checked={theme === "dark"}
//             onChange={(e) => {
//               setTheme(e.target.checked ? "dark" : "light");
//             }}
//           />
//           Use dark mode
//         </label>{" "}
//       </CurrentUserContext>
//     </ThemeContext>
//   );
// }
import { createContext, useState } from "react";
import { WelcomePanel } from "./LearnContext.jsx";
import MyProviders from "../contexts/MyProviders.jsx";

export const ThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);
export default function ContextApp() {
  const [theme, setTheme] = useState("light");
  return (
    <MyProviders theme={theme} setTheme={setTheme}>
      <WelcomePanel />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </MyProviders>
  );
}
