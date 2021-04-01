import React from "react";
import '../base.css'
import './Footer.css'

const socials = [
  {
    id: 1,
    link: "https://www.facebook.com/rohang9896",
    img: "https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/social%20icon/facebook.png?raw=true",
    name: "facebook"
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/rohan-gupta-a88883189",
    img: "https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/social%20icon/linkedin.png?raw=true",
    name: "linkedin"
  },
  {
    id: 3,
    link: "https://twitter.com/rohan_gupta96",
    img: "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/96c0f29d88447b22f4e2c1fde37458cef5e2b412/icons/social%20icon/twitter.svg",
    name: "twitter"
  },
  {
    id: 4,
    link: "https://rohangupta-75149.medium.com/",
    img: "https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/social%20icon/medium.png?raw=true",
    name: "medium"
  },
]

function Footer() {
  return (
    <div>
      <footer className="footer">
        <h2>Connect With Me at:</h2>
        <ul className="footer__socialList">
          {
            socials.map(socialObj => {
              return (
                <li key={socialObj.id}>
                  <a className='socialIcon' href={socialObj.link}>
                    <img src={socialObj.img} alt={socialObj.name} />
                  </a>
                </li>
              )
            })
          }
        </ul>
        <p>Made with 🖤 By Rohan Gupta</p>
      </footer>
    </div>
  );
}

export default Footer;
