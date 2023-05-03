import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  let exampleText;
  if (props.obj_meaning.example) {
    exampleText = (
      <div className="example">
        <p>{props.obj_meaning.example}</p>
      </div>
    );
  }

  return (
    <div className="meaning">
      <h3>{props.obj_meaning.partOfSpeech}</h3>
      <div className="definition">
        <p>{props.obj_meaning.definition}</p>
      </div>
      {exampleText}
      <Synonyms synonyms={props.obj_meaning.synonyms} />
    </div>
  );
}
