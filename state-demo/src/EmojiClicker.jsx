import { useState } from "react"
import {v4 as uuid} from "uuid";
const emojiSet = ["😭","⭐","😒", "👌", "🍒", "🤦‍♂️", "🤷‍♂️"];
const getRandomEmoji = () => emojiSet[Math.floor(Math.random()*emojiSet.length)]
export default function EmojiClicker () {
    const [emojis,setEmojis] = useState([{id: uuid(), emoji: "😊"}]);
    const addEmoji = () => {
        setEmojis((e)=>([...e,{id: uuid(), emoji: getRandomEmoji()}]));
    }
    const removeItem = (id) => {
        setEmojis(e=>e.filter(e=>e.id !== id));
    }
    const showAllHearts = () =>{
        setEmojis(e=>e.map(i=>({...i,emoji: "💖"})))
    }
    return <div>
        {emojis.map((itm)=>(<span key={itm.id} onClick={()=>removeItem(itm.id)} style={{fontSize: "4rem", cursor:"pointer"}}>{itm.emoji}</span>))}
        <br />
        <button onClick={addEmoji}>Add Emoji</button>
        <button onClick={showAllHearts}>Make them all hearts</button>
    </div>
}