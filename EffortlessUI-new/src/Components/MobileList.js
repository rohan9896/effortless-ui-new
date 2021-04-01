import React, { useState } from "react";
import { useSelectedComponent } from "./Context/selected-component-context";
import "./MobileList.css";
import Buttons from "./Buttons";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Avatar from "./Avatar";
import Input from "./Input";
import Card from "./Card";
import Icons from "./Icons";

const components = [
    { name: "Buttons", id: 1, component: <Buttons /> },
    { name: "Icons", id: 2, component: <Icons /> },
    { name: "Avatar", id: 3, component: <Avatar /> },
    { name: "Input", id: 4, component: <Input /> },
    { name: "Navbar", id: 5, component: <Navbar /> },
    { name: "Alert", id: 6, component: <Alert /> },
    { name: "Card", id: 7, component: <Card /> },
  ];

function MobileList() {
  const [hasPopup, setHasPopup] = useState(false);
  const { selectedComp, setSelectedComp } = useSelectedComponent();

  return (
      <div className="MobileList">
        <div className="dropdown">
          <button onClick={() => setHasPopup(!hasPopup)}>
            <span>{selectedComp.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <img
                style={{ height: "1rem" }}
                src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/e3d92bc61c070bf395331cd48c325b983b95e92c/icons/down-arrow.svg"
                alt="down arrow"
              />
            </span>
          </button>
        </div>
        <div style={{ display: hasPopup ? null : "none" }} className="popup">
          <ul>
            {components.map((component) => {
              if (component.id === selectedComp.id) return null;
              return (
                <li
                  key={component.id}
                  onClick={() => setSelectedComp(component)}
                >
                  <span>{component.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  );
}

export default MobileList;
