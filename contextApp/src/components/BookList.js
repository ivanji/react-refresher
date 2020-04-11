import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";
/* 
// Learning Context using Class Component
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
 */

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(book => {
          return (
            <li style={{ background: theme.ui }} key={book.id}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
