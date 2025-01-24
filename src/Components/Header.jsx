import React from "react";
import myImage from "../Photos/myImage2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark} from "@fortawesome/free-solid-svg-icons";

function Header(){
  var Sidebar = document.getElementById("sidebar-hidden");

  var active = document.getElementsByClassName("about-tab-contant");
  var selected = document.getElementsByClassName("about-tab-link");
  
  function SideBar(){
    document.getElementById("sidebar-hidden").style.right = `${0}px`;
    
     
  }
  function SidebarHidden(){
    document.getElementById("sidebar-hidden").style.right = `${-200}px`;
  }
  

    return(
        <>
        <div id="header">
      <div id="contain">
        <nav id="head">
          <h1><span>W</span>eb</h1>
          <ul id="sidebar-hidden">
            {/* <i onclick={SidebarHidden} class="fa-solid fa-xmark"></i> */}
            <div onClick={SidebarHidden}>
            <FontAwesomeIcon icon={faXmark} id="Icon"/>
            </div>
           
            <li><a href="#header">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Service">Services</a></li>
            <li><a href="#Portfolio">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          {/* <i id="sidebar" onclick={SideBar} class="fa-solid fa-bars"></i> */}
          <div id="sidebar" onClick={SideBar}>
          <FontAwesomeIcon icon={faBars}  id="Icon"/>
          </div>
          
        </nav>
      </div>
    </div>
    <div id="head-row">
      <div id="head-col1">
        <p>Frontend & Backend Developer</p>
        <h1>Hi, I'am <span>R</span>ajan <span> </span><br />From Uttar Pradesh</h1>
      </div>
      <div id="head-col2">
        <img src={myImage} alt="" />
      </div>
    </div>

        
        </>
    )
}

export default Header;