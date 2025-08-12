import { useState } from "react";
import { CurrentUserContext, ThemeContext } from "../components/ContextApp.jsx";

export default function MyProviders({ children, theme, setTheme }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext value={theme}>
      <CurrentUserContext value={{ currentUser, setCurrentUser }}>
        {children}
      </CurrentUserContext>
    </ThemeContext>
  );
}
