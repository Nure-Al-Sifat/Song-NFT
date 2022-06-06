import React from "react";

function CardHeaderTitle(props) {
  return (
    <>
      <div className="card-header-title">
        <h2>{props.HeaderTitle}</h2>
        <div className="arrow-box">
          <div className="arrow" onClick={props.slidePrev}>
            <img src="assets/chevron-right.png" alt="right" />
          </div>
          <div className="arrow" onClick={props.slideNext}>
            <img src="assets/chevron-left-2.png" alt="Left" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHeaderTitle;
