import "./App.css";
import React, { useState } from "react";
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "4px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <TwitterShareButton
            url={"https://www.example.com"}
            quote={quote.content}
            hashtag="#muo"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <FacebookShareButton
            url={"https://www.example.com"}
            quote={quote.content}
            hashtag="#muo"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <LinkedinShareButton
            url={"https://www.example.com"}
            quote={quote.content}
            hashtag="#muo"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    </>
  );
};

export default App;
