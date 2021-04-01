import React, { useState } from "react";
import "../base.css";
import CodeContainer from "./CodeContainer";
import Description from "./Description";
import "./Heading.css";
import "./Input.css";


const inputs = [
  {
    id: 1,
    type: "text",
    class: "primaryInput",
    placeholder: "Primary Input"
  },
  {
    id: 2,
    type: "text",
    class: "primaryInput focus",
    placeholder: "Primary Input With Border Color"
  },
  {
    id: 3,
    type: "text",
    class: "roundInput",
    placeholder: "Round Input"
  },
  {
    id: 4,
    type: "text",
    class: "searchInput",
    placeholder: "🔍 Search..."
  },
  {
    id: 5,
    type: "password",
    class: 'passwordInput',
    placeholder: 'Enter password here'
  },
  {
    id: 6,
    type: "search-nonExpand",
    class: "searchInput-NonExpand",
    placeholder: "🔍 Search..."
  }
]

function Input() {

  const [input, setInput] = useState(inputs[0]);

  const copyCode = `<input type="${input.type}" class="${input.class}" placeholder="${input.placeholder}" />`

  return (
    <div>
      <div className="input__headingContainer">
        <h1 className="title">Input Field</h1>
      </div>
      <Description desc="Input Fields can be used to take input from the user of anytype(text/password/email/phone no/etc)." />
      <ul className="input__list">
        {
          inputs.map(inputObj => {
            return (
              <li onClick={() => setInput(inputObj)} key={inputObj.id}>
                <input type={inputObj.type} className={inputObj.class} placeholder={inputObj.placeholder} />
              </li>
            )
          })
        }
      </ul>
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default Input;

