import React from "react";

const about = () => {
  return (
    <section className="about">
      <div className="overlay" />
      <div className="about__content container">
        <h1 className="mainHeading about__heading">A little about me...</h1>
        <div className="about__text">
          <p>
            My name is adam and I am a front end developer based in london.{" "}
            <br /> <br />
            After spending many years working in the fiancial industry i decided
            to take the lead and turn what was a passion into a career. initally
            self taught when i decided to make the change i signed up to online
            courses to sharpen my skills to a professional standard. <br />
            <br /> I have worked on freelance projects working building and in
            some cases designing modern responsive websites. currently I am
            looking for freelance work or junior postions.
          </p>
        </div>

        <h1 className="mainHeading about__heading">Skills</h1>
        <ul className="about__skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Photoshop</li>
          <li>Sketch</li>
        </ul>
      </div>
    </section>
  );
};

export default about;
