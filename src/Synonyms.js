import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <section className="Synonyms">
        <ul>
          <strong>Synonyms:</strong>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </section>
    );
  } else {
    return null;
  }
}
