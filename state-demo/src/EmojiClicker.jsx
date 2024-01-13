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
        const newArr = emojis.filter(e=>e.id !== id)
        setEmojis(newArr);
    }
    return <div>
        {emojis.map((itm)=>(<span key={itm.id} onClick={()=>removeItem(itm.id)} style={{fontSize: "4rem", cursor:"pointer"}}>{itm.emoji}</span>))}
        <br />
        <button onClick={addEmoji}>Add Emoji</button>
    </div>
}