import React, { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContexProvider = props => {
  const [books] = useState([
    { title: "Think and Grow Rich", id: 1 },
    { title: "The Millionaire Mind", id: 2 },
    { title: "Rich Habits", id: 3 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};
