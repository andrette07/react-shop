import React from "react";
const Rating = ({ value, text }) => {
  return (
    <div className="rating my-3">
      <span>
        <i
          className={`text-yellow ${
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`text-yellow ${
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`text-yellow ${
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`text-yellow ${
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }`}
        ></i>
      </span>
      <span>
        <i
          className={`text-yellow ${
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }`}
        ></i>
      </span>
      <span className="ml-2">{text && text}</span>
    </div>
  );
};

export default Rating;
