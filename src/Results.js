import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1>{props.results.word}</h1>
        <strong>Phonetic: </strong>
        {props.results.phonetic}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning obj_meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
