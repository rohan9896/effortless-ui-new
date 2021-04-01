import React, { useState } from "react";
import "../base.css";
import "./FaceAvatar.css";
// import './codecontainer.css';
import './Heading.css'
import CodeContainer from './CodeContainer';
import Description from "./Description";

const faceAvatars = [
  {
    id: 1,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarUser.svg",
    name: "user",
  },
  {
    id: 2,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarUser2.svg",
    name: "user2",
  },
  {
    id: 3,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarMan.svg",
    name: "man",
  },
  {
    id: 4,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarWomen.svg",
    name: "woman",
  },
  {
    id: 5,
    img:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarHacker.svg",
    name: "hacker",
  },
];


function FaceAvatar() {
  const [faceAvatarImage, setFaceAvatarImage] = useState(
    `https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/avatar%20component/avatarUser.svg`
  );
  const [ownPhotoClicked, setOwnPhotoClicked] = useState(false);
  const [linkVal, setLinkVal] = useState('');

  const copyCode = `<img class="faceavatar" src="${ownPhotoClicked ? linkVal : faceAvatarImage}" alt="avatar" />`;

  return (
    <div>
      <h2 className='title'>Face Avatars</h2>
      <Description desc="Face Avatar is used to portray a user. You can also add your own image by clicking 'Add Your Own Image' button and pasting the link in textbox." />
      <ul className="faceavatar__list">
        {faceAvatars.map((faceAvatarObj) => {
          return (
            <li key={faceAvatarObj.id}>
              <img
                className="faceavatar"
                src={faceAvatarObj.img}
                alt={faceAvatarObj.name}
                onClick={() => setFaceAvatarImage(faceAvatarObj.img)}
              />
            </li>
          );
        })}
        <button onClick={() => setOwnPhotoClicked(!ownPhotoClicked)}>Add Your Own Image</button>
      </ul>
      {
          ownPhotoClicked && <textarea value={linkVal} onChange={(e) => setLinkVal(e.target.value)} placeholder='enter link of your avatar image'></textarea>
      }
      <CodeContainer codeForCopy={copyCode}  />
    </div>
  );
}

export default FaceAvatar;
