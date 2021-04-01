import React, { useState } from "react";
import "../base.css";
import "./Alert.css";
import CodeContainer from "./CodeContainer";
import Description from "./Description";
import "./Heading.css";

const alerts = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/fdcbdb1400ba31ac031488047bd199407f8cadbc/icons/alert%20component/check-mark.svg",
    name: "success",
    displayText: "This is success message",
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/0b2d310df859786fd0b1c6b32ad4b5c5ea07c4c8/icons/alert%20component/danger.svg",
    name: "warning",
    displayText: "This is warning message",
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/0b2d310df859786fd0b1c6b32ad4b5c5ea07c4c8/icons/alert%20component/wrong.svg",
    name: "failure",
    displayText: "This is failure message",
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/0b2d310df859786fd0b1c6b32ad4b5c5ea07c4c8/icons/alert%20component/information.svg",
    name: "info",
    displayText: "This is information message",
  },
];

function Alert() {
  const [alert, setAlert] = useState(alerts[0]);

  const copyCode = `<div class="alert">
  <div class="alertIcon ${alert.name}">
    <img src="${alert.img}" />
  </div>
  <div class="alertText ${alert.name}">
    <div>
      <span>${alert.displayText}</span>
    </div>
    <span class="cross">X</span>
  </div>
</div>`;

  return (
    <div>
      <h1 className="title">Alerts</h1>
      <Description desc="An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task." />
      <ul className="alert__list">
        {alerts.map((alertObj) => {
          return (
            <li
              onClick={() => setAlert(alertObj)}
              className="alert"
              key={alertObj.id}
            >
              <div className={`alertIcon ${alertObj.name}`}>
                <img src={alertObj.img} alt={alertObj.name} />
              </div>
              <div className={`alertText ${alertObj.name}`}>
                <div>
                  <span>{alertObj.displayText}</span>
                </div>
                <span className="cross">X</span>
              </div>
            </li>
          );
        })}
      </ul>
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default Alert;
