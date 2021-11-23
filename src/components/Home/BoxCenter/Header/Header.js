import React from "react";
import "./Header.scss"
import Resume from "../../Pages/Resume"
// import User from "../../../assets/Images/User.jpg"



export default function Header() {
  const [modalOpen ,setModalOpen ] = React.useState(false)
  
  return (
    <div>
      <header className="header">
        <div className="continer">
          <div className="box">
            <div className="boxLeft">
              <h2>Mukhammad <br/> Razzakberganov</h2>
              <p>FrontEnd Developer</p>
              <span>Creator of <a href="https://uzwebdevelopment.netlify.app/" target="_blank" rel="noreferrer" >UzWeb Development</a></span>
                
                  <p className="resume" onClick={() => setModalOpen(true)} >View resume</p>
                
            </div>
            <div className="boxRight">
              
            </div>
          </div>
        </div>
      </header>
      {modalOpen && <Resume closeModal={setModalOpen} />}
      
    </div>
  );
}
