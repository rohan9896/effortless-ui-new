import React, { useState } from "react";
import "../base.css";
import "./SocialIcon.css";
import "./Heading.css";
import CodeContainer from './CodeContainer'
import Description from "./Description";

const icons = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/facebook.svg",
    name: "facebook",
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/instagram.svg",
    name: "instagram",
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/linkedin.svg",
    name: "linkedin",
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/reddit.svg",
    name: "reddit",
  },
  {
    id: 5,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/snapchat.svg",
    name: "snapchat",
  },
  {
    id: 6,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/tik-tok.svg",
    name: "tiktok",
  },
  {
    id: 7,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/whatsapp.svg",
    name: "whatsapp",
  },
  {
    id: 8,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/41fd90db9cb72787dd5c1bac2f0adafc3211e132/icons/social%20icon/youtube.svg",
    name: "youtube",
  },
  {
    id: 9,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/96c0f29d88447b22f4e2c1fde37458cef5e2b412/icons/social%20icon/twitter.svg",
    name: "twitter",
  },
  {
    id: 10,
    img:
      "https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/social%20icon/medium.png?raw=true",
    name: "medium",
  },
  {
    id: 11,
    img: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/e6cb96c466ed6305cdf465e6f86c6bde0150fd7e/icons/social%20icon/github.svg",
    name: "github"
  }
];

function SocialIcon() {
  const [icon, setIcon] = useState(icons[0]);
  const [changeLinkClicked, setChangeLinkClicked] = useState(false);
  const [linkVal, setlinkVal] = useState("");

  const copyCode = `<a class='socialIcon' href="${linkVal}"><img src="${icon.img}" alt="${icon.name}" /></a>`;

  return (
    <div>
      <div className="socialIcon">
        <h1 className="title">Social Media Icons</h1>
        <Description desc="Social Media Icons can be used for adding social media links in 'contact me' section of any website." />
        <ul className="socialIcon__list">
          {icons.map((iconObj) => {
            return (
              <li key={iconObj.id} onClick={() => setIcon(iconObj)}>
                <div className="socialIcon">
                  <img src={iconObj.img} alt={iconObj.name} />
                </div>
              </li>
            );
          })}
        </ul>
        <button onClick={() => setChangeLinkClicked(!changeLinkClicked)}>
          {changeLinkClicked ? "Hide textarea" : "Add Link URL"}
        </button>
        {changeLinkClicked && (
          <textarea
            value={linkVal}
            onChange={(e) => setlinkVal(e.target.value)}
            placeholder="enter link here"
          ></textarea>
        )}
      </div>
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default SocialIcon;
