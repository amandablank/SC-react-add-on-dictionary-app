import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiUrl =
      "https://api.shecodes.io/dictionary/v1/define?word=serendipity&key=f5a9f38100065t0934bo1b43d42ba03a";
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}

//https://api.shecodes.io/dictionary/v1/define?word=sunset&key=f5a9f38100065t0934bo1b43d42ba03a
//apiKey = f5a9f38100065t0934bo1b43d42ba03a
