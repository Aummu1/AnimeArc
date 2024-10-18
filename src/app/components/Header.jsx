"use client"
import React, { useState } from "react";
import Image from "next/image";
import 'boxicons/css/boxicons.min.css';

function Header() {
  // สร้าง state สำหรับการเปิด/ปิดเมนู
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [popupInfo, setPopupInfo] = useState(""); // ใช้สำหรับเก็บข้อมูลใน pop-up
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ฟังก์ชันสำหรับเปิด/ปิดเมนู
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // ฟังก์ชันสำหรับเปิด pop-up
  const openPopup = (info) => {
    setPopupInfo(info);
    setIsPopupOpen(true);
  };

  // ฟังก์ชันสำหรับปิด pop-up
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };  

  return (
    <>
      <header className="header">
        <div className="flex">
          <Image className="mr-2" src="/image/logo.png" alt="Logo" width={50} height={50} />
          <a href="#" className="logo">
            Aummu
          </a>
        </div>

        <i className='bx bx-menu icon' id="menu-icon" onClick={toggleMenu}></i>

        {/* Navbar */}
        <nav className={`navbar ${isMenuActive ? "active" : ""}`}>
          <a className="cursor-pointer" onClick={() => scrollToSection("ABOUT_US")}>ABOUT US</a>
          <a className="cursor-pointer" onClick={() => scrollToSection("BEST")}>BEST</a>
          <a className="cursor-pointer" onClick={() => scrollToSection("BLOG")}>BLOG</a>
          <a className="cursor-pointer" onClick={() => scrollToSection("DIDYOUKNOW")}>DID YOU KNOW</a>
          <a className="cursor-pointer" onClick={() => scrollToSection("ABOUT_ME")}>ABOUT ME</a>
          <a className="cursor-pointer" onClick={() => scrollToSection("CONTACT_US")}>CONTACT US</a>
        </nav>
      </header>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup" id="popup" onClick={closePopup}>
          <div className="popup-content" id="popup-content">
            {popupInfo}
          </div>
          <button id="popup-close" onClick={closePopup}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
