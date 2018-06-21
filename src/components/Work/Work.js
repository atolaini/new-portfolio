import React from "react";

const work = () => {
  return (
    <section className="work">
      <div className="overlay" />
      <h1 className="mainHeading">Some of my work...</h1>
      <div className="flex">
        <div className="col workCard">
          <figure className="workImgContainer">
            <a href="http://adamjmagic.com/" target="_blank">
              <img
                src="/img/adamJames.png"
                alt="Adam James"
                className="workImgContainer__img"
              />
            </a>
          </figure>
          <p className="subHeading">
            This is my personal website that promotes my hobbie of magic!
            visit..
          </p>
        </div>
        <div className="col workCard">
          <figure className="workImgContainer">
            <a href="http://fineanddandycakes.com/" target="_blank">
              <img
                src="/img/fine&dandy.png"
                alt="Fine and Dandy"
                className="workImgContainer__img"
              />
            </a>
          </figure>
          <p className="subHeading">
            This website was created for a custom cake maker…tasty!!
          </p>
          <a href="http://fineanddandycakes.com/" target="_blank">
            Vist Site
          </a>
        </div>
        <div className="col workCard">
          <figure className="workImgContainer">
            <a
              href="https://weather-app-a3dd6.firebaseapp.com/"
              target="_blank"
            >
              <img
                src="/img/weatherApp.png"
                alt="Weather App"
                className="workImgContainer__img"
              />
            </a>
          </figure>
          <p className="subHeading">
            just a little weather app built using react js visit…
          </p>
        </div>
      </div>
    </section>
  );
};

export default work;
