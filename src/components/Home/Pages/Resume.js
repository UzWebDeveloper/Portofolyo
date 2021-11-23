import React from "react";
import "./Resume.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import User from "../../assets/Images/User.jpg";

export default function Resume({ closeModal }) {
  return (
    <div>
      <div className="resumeBox">
        <div className="continer"  >
          <div className="closeBtn">
          <button onClick={() => closeModal(false)}>
            <AiOutlineCloseCircle size="30px" color="#fff" />
          </button>
          </div>
          <div className="Box">
            <div className="resume">

              <div className="boxTop">

                <div className="topLeft">
                  <h2>
                    Mukhammad <br /> Razzakberganov
                  </h2>
                  <p><span className="num">19</span> <span>years old</span> </p>
                  <p><span className="num" >13</span> <span>month experience</span> </p>
                  <p><span className="num" >11</span> <span> projects completed </span> </p>
                </div>
                <div className="topRight">
                  <img src={User} alt="user-img" />
                </div>

              </div>

              <div className="boxBottom">
                <h2>Website development with attention to detail.</h2>
                <p>
                  I am a freelancer who makes websites in Html, Css/Scss,
                  Bootstrap/Reactstrap/MaterialUI, JavaScript and React for
                  business tasks. I guarantee a reliable partnership and work
                  done on time, otherwise I will refund the full cost of the
                  project. If you need a website without intermediaries, please
                  contact.
                </p>
                <p>
                  My goal is to develop a website for you that solves business
                  problems and makes a profit, with an optimal budget and on
                  time. Without the bureaucracy of large web studios and complex
                  communication stages.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
