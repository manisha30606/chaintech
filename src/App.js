import React, { useState } from 'react';
import "./App.css";

//IMPORT IMAGES AND LOGO
import Logo from "./image/logo.svg";
import icon from "./image/p.svg"
import Img1 from"./image/1.png";
import Img2 from "./image/2.png";
import Img3 from "./image/3.png";
import Img4 from "./image/4.png";

//IMPORT ICONS
import { FaArrowRight } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { GoArrowLeft } from "react-icons/go";
import { BsArrowRightCircle } from "react-icons/bs";

const App = () => {


  //FOR MOBILE RESPONSIVE
  const [Mobile, setMobile] = useState(false);


 //STORE THE VALUE OF SERVICE DATA
  const serviceData = [
    {
      heading_top: "Blockchain",
      heading_down:"Development",
      imgSrc: Img2
    },
    {
      heading_top: "Blockchain",
      heading_down:"Development",
      imgSrc: Img3
    },
    {
      heading_top: "Security",
      heading_down: "AAS",
      imgSrc: Img4
    },
    {
      heading_top: "Motion",
      heading_down: "Graphic",
      imgSrc: Img1
    },
    {
      heading_top: "Blockchain",
      heading_down:"Development",
      imgSrc: Img2
    },
    {
      heading_top: "Blockchain",
      heading_down:"Development",
      imgSrc: Img3
    },
    {
      heading_top: "Security",
      heading_down: "AAS",
      imgSrc: Img4
    },
    {
      heading_top: "Motion",
      heading_down: "Graphic",
      imgSrc: Img1
    },
  ];
  //STORE THE BACKGROUND COLOR
  const backgroundColors = ['#c6f9dd', '#bdeff3', '#f9d3d3', '#b9c1f1'];
  return (
    <>   
         {/* ==================================MAIN SECTION=========================== */}
       <section className="main">
            {/* ======================WELCOME PAGE===================== */}
        <div className="hero-page">
          <nav className="navbar">
            <div className="logo">
              <img src={Logo} className="img" alt="" />
            </div>
            <div className="menu">
              <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
 
            <li className="list-unique">Company</ li>
        
         
            <li className="list">Services</ li>
          
     
            <li className="list">Bussiness models</ li>
          
       
            <li className="list">Blogs</ li>
        
         
            <li className="list">Contact Us</ li>
       
        </ul>
            </div>
            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <IoMdClose/> : <IoMdMenu/>}
        </button>
          </nav>

          <div className="header">
            <h1>WELCOME <br/> TO <span>CHAINTECH</span></h1>
            <p>From square one to engineering excellence! PixelPlex assists in full-cycle software<br/>
              development, jumps in to take it over, or brings dedicated top-demanded skills</p>
            <div className="buttons">
              <button className='btn'>Get Started <span><FaArrowRight className='arrow'/></span></button>
            </div>
          </div>
        </div>

           {/*==============================SERVICES PAGE ============================ */}
         <div className="service">
           <div className="service-data">
            <div className="service-head">
              <div className="head-data">
              <h1>Services We Offer</h1>
              <p>Discover the digital possibilities for your brand with our comprehensive suite of services.</p>
              </div>
              <div className="head-icon">
                <p><GoArrowLeft className='left'/><BsArrowRightCircle className='right'/></p>
              </div>
            </div>
            <div className="service-boxes">
            {serviceData.map((service, index) => (
              <div className="service-box" key={index} style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
                <div className="box-top">
                  <img src={icon} className="box-icon" alt="" />
                  <h4>Join Development</h4>
                </div>
                <div className="box-middle">
                  <h1>{service.heading_top}<br/>{service.heading_down}</h1>
                  <div className='middle-img'>
                  <img src={service.imgSrc} alt="" />
                  </div>
                </div>
                <div className="box-bottom">
                  <button className='btns'>Explore <span><FaArrowRight className='arrows'/></span></button>
                </div>
              </div>
            ))}
          </div>
           </div>
         </div>

         {/* ==============================FOOTER PAGE============================== */}
          <footer className="footer">
            <div className="footer-data">
              <img src={Logo} alt="" />
              <p> ©️ 2024 All Rights Reserved - Chaintech Network</p>
            </div>
          </footer>
      
      </section>
    
    </>
  )
}

export default App;