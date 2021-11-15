import React from "react";

import "./NavBar.scss";
import {
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="Nav">
      <div className="continer">        
        <div className="menuBox ">
          <ul>
            <a href="https://www.linkedin.com/in/razzakberganov-mukhammad-681460204/" target="_blank" rel="noreferrer" className="Link">
              <li>
                <FaLinkedin size="32px" />
              </li>
            </a>
            <a className="Link" href="https://github.com/UzWebDeveloper" target="_blank" rel="noreferrer" >
              <li>
                <FaGithub size="32px" />
              </li>
            </a>
            <a  className="Link"  href="https://t.me/JohnDoe_Me" target="_blank" rel="noreferrer">
              <li>
                <FaTelegram size="32px" />
              </li>
            </a>
            <a className="Link" href="https://www.instagram.com/razzakberganov.m/" target="_blank" rel="noreferrer">
              <li>
                <FaInstagram size="32px" />
              </li>
            </a>
            <a className="Link" href="https://www.facebook.com/muxammad.razzakberganov/" target="_blank" rel="noreferrer">
              <li>
                <FaFacebook size="32px" />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
