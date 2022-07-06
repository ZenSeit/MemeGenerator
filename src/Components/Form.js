import { Input } from "@mui/material";
import "../Stylesheets/form.css";
import { useState } from "react";

export default function Form() {

  const [memeMake,setMemeMake] = useState(
    {
      topText:'',
      bottomText:'',
      urlImg:''
    }
  )

  async function  getData() {
    await fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((r) => r.data.memes.filter((mem) => mem.box_count === 2))
      .then((memFilter) =>
      setMemeMake(
        {...memeMake,
          urlImg:memFilter[Math.floor(Math.random() * memFilter.length)].url
        }
        )
      )
  }

  function handleChange(e){
    const {name,value}=e.target
    setMemeMake(
      {
        ...memeMake,
        [name]:value,
      }
    )

  }

  return (
    <div className="container">
      <div className="main--container">
        <Input
          placeholder="Top text"
          className="in--text"
          onChange={handleChange}
          name='topText'
          autoFocus
        />
        <Input
          placeholder="Bottom text"
          className="in--text"
          onChange={handleChange}
          name='bottomText'
        />
        <button className="send--button" onClick={getData}>
          Make my Meme
        </button>
      </div>
      {memeMake.urlImg !=='' && (
        <div className="meme">
          
          <h2 className="meme--toptext">{memeMake.topText}</h2>
          <img src={memeMake.urlImg} className="meme--img" />
          <h2 className="meme--bottomtext">{memeMake.bottomText}</h2>
        </div>
      )}
    </div>
  );
}
