import React from "react";
import ContactCard from "../Contact/ContactCard";

const contact = () => {
  return (
    <section className="contact">
      <div className="overlay" />
      <div>
        <h1 className="mainHeading">Contact</h1>
        <ContactCard icon="/img/sprite.svg#icon-at-sign">
          <a href="mailto:adam.tolaini@gmail.com">adam.tolaini@gmail.com</a>
        </ContactCard>
        <ContactCard icon="img/sprite.svg#icon-phone">
          <p>+44 (0) 7393-435-499</p>
        </ContactCard>
        <ContactCard icon="img/sprite.svg#icon-linkedin">
          <a href="http://www.linkedin.com/in/adam-tolaini">
            linkedin/adam-tolaini
          </a>
        </ContactCard>
        <ContactCard icon="img/sprite.svg#icon-globe">
          <a href="https://github.com/atolaini">github/atolaini</a>
        </ContactCard>
      </div>
    </section>
  );
};

export default contact;
