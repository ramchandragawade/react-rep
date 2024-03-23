import { useState, useEffect } from "react";

function QuoteLoader() {
    const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

    const [quote, setQuote] = useState({
        text:"", author:""
    });

    const [isLoading, setIsLoading] = useState(true);

    async function fetchAndSetQuote(){
        setIsLoading(true);
        const res = await fetch(RANDOM_QUOTE_URL);
        const jsonRes = await res.json();
        const randomQuote = jsonRes.quote;
        setQuote({text: randomQuote.text, author:randomQuote.author});
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchAndSetQuote();
    },[]);
    return <div>
        <p className="Loader" style={{opacity: isLoading?1:0,transition: "0.5s"}}>Loading...</p>
        <button onClick={fetchAndSetQuote}>Get quote</button>
        {quote.text && <div><h2>{quote.text}</h2><h3>-{quote.author}</h3></div>}
    </div>
}

export default QuoteLoader;