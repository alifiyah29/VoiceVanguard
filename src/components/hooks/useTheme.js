import { useState } from "react";

export default function useTheme() {
  const [darkTheme, setdarkTheme] = useState(false);
  const toggleTheme = () => {
    setdarkTheme(!darkTheme);
  };

  

  return { darkTheme, toggleTheme };
}
