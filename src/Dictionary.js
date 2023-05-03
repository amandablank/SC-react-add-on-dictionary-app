import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import icon from "./images/search.png";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "f5a9f38100065t0934bo1b43d42ba03a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <div>
          <img
            src={icon}
            alt="dictionary-search"
            className="book-icon img-fluid"
          />
        </div>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Which word do you want to look up?"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          suggested words: sunset, wine, yoga, forest...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
