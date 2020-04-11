import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// Approach 1: Consuming context using Context Consumer
// class ThemeToggle extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {context => {
//           return (
//             <button onClick={context.toggleTheme}>Toggle Dark mode</button>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }
const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Dark mode</button>;
};

// Approach 2: Consuming context using contextType
// class ThemeToggle extends Component {
//   static contextType = ThemeContext;

//   render() {
//     return <button onClick={this.context.toggleTheme}>Toggle Dark mode</button>;
//   }
// }

export default ThemeToggle;
