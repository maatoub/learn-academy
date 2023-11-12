import NavBar from "@/components/navBar";
import style from "./contact.module.css";
import React from "react";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div id={style.banner_contact}>
        <h2>Contact</h2>
      </div>
      {/* <img src="../images/banner-contact.png" alt="banner-contact"></img> */}
    </div>
  );
};

export default Contact;
