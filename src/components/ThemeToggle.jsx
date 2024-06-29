import { useGlobalContext } from "../context";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" type="button" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <IoSunny className="toggle-icon" />
        ) : (
          <FaMoon className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
