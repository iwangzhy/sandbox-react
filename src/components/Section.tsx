// @ts-ignore
import { LevelContext } from "../contexts/LevelContext.js";
import { useContext } from "react"; // @ts-ignore
// @ts-ignore
export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext value={1 + level}>{children}</LevelContext>
    </section>
  );
}
