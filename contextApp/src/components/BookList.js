import React, { Component } from "../../node_modules/@types/react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  // One way of consuming context
  // NavBar component has an alternative way of doing so.
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Think and Grow Rich</li>
          <li style={{ background: theme.ui }}>The Millionair Mind</li>
          <li style={{ background: theme.ui }}>Rich Habits</li>
        </ul>
      </div>
    );
  }
}
export default BookList;
