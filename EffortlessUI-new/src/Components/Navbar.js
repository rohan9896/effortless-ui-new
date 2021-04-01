import React, { useState } from "react";
import "../base.css";
import "./Navbar.css";
import "./Heading.css";
import CodeContainer from "./CodeContainer";
import Description from "./Description";

function Navbar() {
  const [[link1, link2, link3], setLink] = useState(["", "", ""]);
  const [[nameOfLink1, nameOfLink2, nameOfLink3], setNameOfLinks] = useState([
    "Name1",
    "Name2",
    "Name3",
  ]);
  const [selected, setSelected] = useState("Nav1")

  let copyCode;
   switch (selected) {
    case "Nav1":
      copyCode = `<nav><ul class="nav1__navList"><li class="nav1__navStart"><a href="${link1}">${nameOfLink1}</a><a href="${link2}">${nameOfLink2}</a><a href="${link3}">${nameOfLink3}</a></li><li class="nav1__navEnd"><span><input class="searchInput" type="text" placeholder="🔎Search" /></span><span><button>LOG IN</button></span></li></ul></nav>`;
      break;
    case "Nav2":
      copyCode = `<nav><ul class="nav2__navList"><li class="nav2__navStart"><a href="${link1}">${nameOfLink1}</a><a href="${link2}">${nameOfLink2}</a><a href="${link3}">${nameOfLink3}</a></li><li><input type="text" class="searchInput-NonExpand" placeholder="🔍 Search..." /></li></ul></nav>`
      break;
    default:
      break;
  } 

  return (
    <div>
      <div className="Navbar__container">
        <h1 className="title">Navbars</h1>
        <Description desc="A Navigation bar (or navigation bar) is a section usually placed at the top of the website, contains all the links to navigate through the website." />
        <div>
          <div className="navbar__linkInput">
            <p>Link 1: </p>
            <input
              className="roundInput focus"
              value={nameOfLink1}
              onChange={(e) =>
                setNameOfLinks([e.target.value, nameOfLink2, nameOfLink3])
              }
              placeholder="Enter name of link 1"
            />
            <input
              className="roundInput focus"
              value={link1}
              onChange={(e) => setLink([e.target.value, link2, link3])}
              placeholder="Enter link here"
            />
          </div>
          <div className="navbar__linkInput">
            <p>Link 2: </p>
            <input
              className="roundInput focus"
              value={nameOfLink2}
              onChange={(e) =>
                setNameOfLinks([nameOfLink1, e.target.value, nameOfLink3])
              }
              placeholder="Enter name of link 2"
            />
            <input
              className="roundInput focus"
              value={link2}
              onChange={(e) => setLink([link1, e.target.value, link3])}
              placeholder="Enter link here"
            />
          </div>
          <div className="navbar__linkInput">
            <p>Link 3: </p>
            <input
              className="roundInput focus"
              value={nameOfLink3}
              onChange={(e) =>
                setNameOfLinks([nameOfLink1, nameOfLink2, e.target.value])
              }
              placeholder="Enter name of link 3"
            />
            <input
              className="roundInput focus"
              value={link3}
              onChange={(e) => setLink([link1, link2, e.target.value])}
              placeholder="Enter link here"
            />
          </div>
        </div>
        <nav onClick={() => setSelected("Nav1")}>
          <ul className="nav1__navList">
            <li className="nav1__navStart">
              <a href={link1}>{nameOfLink1}</a>
              <a href={link2}>{nameOfLink2}</a>
              <a href={link3}>{nameOfLink3}</a>
            </li>
            <li className="nav1__navEnd">
              <span>
                {/* <input type="text" placeholder="🔎Search" /> */}
                <input
                  type="text"
                  className="searchInput"
                  placeholder="🔍 Search..."
                />
              </span>
              <span>
                <button>LOGIN</button>
              </span>
            </li>
          </ul>
        </nav>
        <nav onClick={() => setSelected("Nav2")}>
          <ul className="nav2__navList">
            <li className="nav2__navStart">
              <a href={link1}>{nameOfLink1}</a>
              <a href={link2}>{nameOfLink2}</a>
              <a href={link3}>{nameOfLink3}</a>
            </li>
            <li>
              <input
                type="text"
                className="searchInput-NonExpand"
                placeholder="🔍 Search..."
              />
            </li>
          </ul>
        </nav>
        <CodeContainer codeForCopy={copyCode} />
      </div>
    </div>
  );
}

export default Navbar;

/*
`
<nav><ul class="nav2__navList"><li class="nav2__navStart"><a href={link1}>{nameOfLink1}</a><a href={link2}>{nameOfLink2}</a><a href={link3}>{nameOfLink3}</a></li><li><input type="text" class="searchInput-NonExpand" placeholder="🔍 Search..." /></li></ul></nav>
`
*/