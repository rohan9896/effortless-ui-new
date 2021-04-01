import React from "react";
import './codecontainer.css'

function CodeContainer( props ) {
  return (
    <div>
      <div className="codeContainer">
        <p>{props.codeForCopy}</p>
        <button
          onClick={() =>
            navigator.clipboard.writeText(props.codeForCopy)
          }
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default CodeContainer;