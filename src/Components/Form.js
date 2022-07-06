import { Input } from "@mui/material";
import "../Stylesheets/form.css";
import { useState } from "react";

export default function Form() {
  const [meme, setMeme] = useState({});
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  function getData() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((r) => r.data.memes.filter((mem) => mem.box_count === 2))
      .then((memFilter) =>
        setMeme(memFilter[Math.floor(Math.random() * memFilter.length)])
      );
  }

  function handleTop(e) {
    setTopText(e.target.value);
  }

  function handleButtom(e) {
    setBottomText(e.target.value);
  }

  return (
    <div className="container">
      <div className="main--container">
        <Input
          placeholder="Top text"
          className="in--text"
          onChange={handleTop}
          autoFocus
        />
        <Input
          placeholder="Bottom text"
          className="in--text"
          onChange={handleButtom}
        />
        <button className="send--button" onClick={getData}>
          Make my Meme
        </button>
      </div>
      {Object.entries(meme) !== 0 && (
        <div className="meme">
          
          <h2 className="meme--toptext">{topText}</h2>
          <img src={meme.url} className="meme--img" />
          <h2 className="meme--bottomtext">{bottomText}</h2>
        </div>
      )}
    </div>
  );
}
