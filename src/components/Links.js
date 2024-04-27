import React from 'react';

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      {props.github && <p><a href={props.github} target="_blank">{props.github}</a></p>}
      {props.linkedin && <p><a href={props.linkedin} target="_blank">{props.linkedin}</a></p>}
    </div>
  );
}

export default Links;