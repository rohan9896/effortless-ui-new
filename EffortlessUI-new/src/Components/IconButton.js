import React, { useState } from "react";
import "../base.css"
import "./IconButton.css";
import './Heading.css'
import CodeContainer from './CodeContainer'
import Description from "./Description";

const icons = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/left-arrow.svg",
    name: "Left Arrow",
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/rightArrow.svg",
    name: "Right Arrow",
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/cancel.svg",
    name: "Cancel",
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/check.svg",
    name: "Check",
  },
  {
    id: 5,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/trash.svg",
    name: "Trash",
  },
];

function IconButton() {
  const [iconImg, seticonImg] = useState(
    `https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/left-arrow.svg`
  );
  const [ownIconClicked, setownIconClicked] = useState(false);
  const [linkVal, setlinkVal] = useState('');

  const copyCode = `<button class="icon-button"><img src="${ownIconClicked ? linkVal : iconImg}" /></button>`;

  const description = `Icon buttons are commonly found in app bars and toolbars.
  Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected.
  You can also add your own image by clicking 'Add your own icon' button and pasting the link of image you want to add.`

  return (
    <div>
      <h2 className='title'>Icon Buttons</h2>
      <Description desc={description} />
      <ul className="iconButton__buttonList">
        {icons.map((iconObj) => {
          return (
            <li key={iconObj.id}>
              <button
                className="icon-button"
                onClick={() => seticonImg(iconObj.img)}
              >
                <img alt={iconObj.name} src={iconObj.img} />
              </button>
            </li>
          );
        })}
        <button onClick={() => setownIconClicked(!ownIconClicked)}>Add your own icon</button>
      </ul>
      {ownIconClicked && <textarea value={linkVal} onChange={(e) => setlinkVal(e.target.value)} placeholder="enter link of your icon image"></textarea>}
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default IconButton;