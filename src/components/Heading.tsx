import { useContext } from "react";
// @ts-ignore
import { LevelContext } from "../contexts/LevelContext.js"; // @ts-ignore

// @ts-ignore
export default function Heading({ children }) {
  // 访问上层最近的 LevelContext 提供的值。
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children} -1</h1>;
    case 2:
      return <h2>{children} -2</h2>;
    case 3:
      return <h3>{children} -3</h3>;
    case 4:
      return <h4>{children} -4</h4>;
    case 5:
      return <h5>{children} -5</h5>;
    case 6:
      return <h6>{children} -6</h6>;
    default:
      throw Error("未知的 level：" + level);
  }
}
