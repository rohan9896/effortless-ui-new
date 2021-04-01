import React from "react";
import { useSelectedComponent } from "./Context/selected-component-context";
import "./DesktopList.css";
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

function DesktopList() {
  const { selectedComp, setSelectedComp } = useSelectedComponent();

  return (
    <>
      <div className="desktop__view">
        <div className="sidebar">
          <h2>Components</h2>
          <ul>
            {components.map((componentObj) => {
              return (
                <li
                  key={componentObj.id}
                  onClick={() => setSelectedComp(componentObj)}
                >
                  <span>{componentObj.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="components">
          {console.log(selectedComp.name)}
          {selectedComp.component}
        </div>
        <div className="footer">
          <p>Made With 🖤 By Rohan Gupta</p>
        </div>
      </div>
    </>
  );
}

export default DesktopList;
