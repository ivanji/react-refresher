import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

/* class NavBar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <ThemeContext.Consumer>
            {themeContext => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <ul>
                    <li>Home</li>

                    <li>About</li>
                    <li>Contact</li>
                    {isAuthenticated ? (
                      <button onClick={toggleAuth}>Logout</button>
                    ) : (
                      <li>
                        <button onClick={toggleAuth}>Login</button>
                      </li>
                    )}
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
} */

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { toggleAuth, isAuthenticated } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>

        <li>About</li>
        <li>Contact</li>
        {isAuthenticated ? (
          <button onClick={toggleAuth}>Logout</button>
        ) : (
          <li>
            <button onClick={toggleAuth}>Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
