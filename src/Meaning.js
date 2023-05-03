import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let exampleText;
  if (props.obj_meaning.example) {
    exampleText = (
      <p>
        <strong>Example: </strong>
        <em>{props.obj_meaning.example}</em>
      </p>
    );
  }

  return (
    <div className="Meaning">
      <h3>{props.obj_meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.obj_meaning.definition}
      </p>
      {exampleText}
      <Synonyms synonyms={props.obj_meaning.synonyms} />
    </div>
  );
}
