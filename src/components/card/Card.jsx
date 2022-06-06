import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={props.songImg} alt="" />
        </div>
        <div className="card-details">
          <img src={props.ArtistImg} alt="" />
          <div className="card-text">
            <h3>{props.song}</h3>
            <p>{props.Artist}</p>
          </div>
          <div className="card-like">
            <img src="assets/Heart.png" alt="like" />
            <p>{props.like}</p>
          </div>
        </div>
        <div className="card-button">
          <div className="btn-one">
            <img src="assets/live-fill.png" alt="Live" />
            <h4>Play Video</h4>
          </div>

          <div className="btn-two">
            <img src="assets/play-fill.png" alt="play" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
