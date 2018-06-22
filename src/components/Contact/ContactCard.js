import React from "react";

const contactCard = props => {
  return (
    <div className="contactCard">
      <div className="contactInfo">
        <ul className="contactCard__methods">
          <li className="contactCard__item">
            <svg className="contactCard__icon">
              <use xlinkHref={props.icon} />
            </svg>
            <p>{props.children}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default contactCard;
