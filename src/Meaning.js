import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  let exampleText;
  if (props.obj_meaning.example) {
    exampleText = (
      <div className="example-text">
        <p>{props.obj_meaning.example}</p>
      </div>
    );
  }

  return (
    <div className="meaning-text">
      <h3>{props.obj_meaning.partOfSpeech}</h3>
      <div className="definition-text">
        <p>{props.obj_meaning.definition}</p>
      </div>
      {exampleText}
      <Synonyms synonyms={props.obj_meaning.synonyms} />
    </div>
  );
}
