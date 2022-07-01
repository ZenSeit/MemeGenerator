import { Input } from "@mui/material";
import "../Stylesheets/form.css";
import { useState } from "react";

export default function Form() {
  const [meme, setMeme] = useState({});
  const [topText,setTopText]=useState('')
  const [buttomText,setButtomText]=useState('')

  function getData() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((r) => r.data.memes.filter((mem) => mem.box_count == 2))
      .then((memFilter) =>
        setMeme(memFilter[Math.floor(Math.random() * memFilter.length)])
      );
  }

  

  function handleTop(e){
    setTopText(e.target.value)
  }

  function handleButtom(e){
    setButtomText(e.target.value)
  }

  return (
    <div className="container">
      <div className="main--container">
        <Input placeholder="Top text" className="in--text" onChange={handleTop} />
        <Input placeholder="Bottom text" className="in--text" onChange={handleButtom} />
        <button className="send--button" onClick={getData}>
          Make my Meme
        </button>
      </div>
      {Object.entries(meme) !== 0 && (
        <img src={meme.url} className="meme--img" />
      )}
    </div>
  );
}
