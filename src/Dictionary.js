import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import icon from "./images/search.png";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let dictionaryApiKey = "f5a9f38100065t0934bo1b43d42ba03a";
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${dictionaryApiKey}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let imagesApiKey = "f5a9f38100065t0934bo1b43d42ba03a";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
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
            placeholder="What word do you want to look up?"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          suggested words: sunset, wine, yoga, forest...
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
