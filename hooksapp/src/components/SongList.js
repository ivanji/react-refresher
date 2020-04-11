import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";

import NewSongForm from "./NewSongForm";

export default function SongList() {
  const [songs, setSongs] = useState([
    { title: "Ode to my family", id: 1 },
    { title: "Linger", id: 2 },
    { title: "Zombie", id: 3 }
  ]);

  const [age, setAge] = useState(20);
  useEffect(() => {
    console.log("Started...");
  }, [songs]);

  useEffect(() => {
    console.log("only runs when age changes...");
  }, [age]);
  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Add 1 to age {age}
      </button>
    </div>
  );
}
