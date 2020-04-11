import React from "../node_modules/@types/react";
import "./App.css";

import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
