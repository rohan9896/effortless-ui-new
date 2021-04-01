import React from "react";
import CodeContainer from "./CodeContainer";
import '../base.css'

const copyCode = `@import url("https://effortlessui.netlify.app/base.css");`;

function DocsContent() {
  return (
    <div>
      <div style={{margin: "2rem"}} className="docsContent">
          <h1>📥 INSTALLATION</h1>
          <h4>Copy the following line and Paste it to a CSS file and link that file to your HTML document</h4>
          <CodeContainer codeForCopy={copyCode} />
          <h4>OR Download the CSS file by clicking below</h4>
          <a href="https://effortlessui.netlify.app/base.css" download='base.css'><button style={{cursor: "pointer"}} className="primary-button  blue">Download</button></a>
      </div>
    </div>
  );
}

export default DocsContent;
