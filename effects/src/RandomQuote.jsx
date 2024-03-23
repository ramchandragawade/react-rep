import { useState, useEffect } from "react";

function RandomQuote() {
    const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

    const [quote, setQuote] = useState({
        text:"", author:""
    });

    async function fetchAndSetQuote(){
        const res = await fetch(RANDOM_QUOTE_URL);
        const jsonRes = await res.json();
        const randomQuote = jsonRes.quote;
        console.log();
        setQuote({text: randomQuote.text, author:randomQuote.author})
    }

    useEffect(()=>{
        fetchAndSetQuote();
    },[]);
    return <div>
        <button onClick={fetchAndSetQuote}>Get quote</button>
        {quote.text && <div><h2>{quote.text}</h2><h3>-{quote.author}</h3></div>}
    </div>
}

export default RandomQuote;