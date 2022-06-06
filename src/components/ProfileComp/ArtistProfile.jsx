import React from "react";

function ArtistProfile() {
  return (
    <>
      <div className="Profile-main">
        <div className="cover-img">
          <img src="assets/artist-profile/snoop-dog-main.png" alt="" />
        </div>
        <div className="profile-details">
          <img src="assets/artist-profile/snoop-nft.png" alt="" />

          <div className="profile-name">
            <h4>Snoop Dogg</h4>
            <img src="assets/verify-tick.png" alt="" />
          </div>
          <div className="profile-links">
            <div className="address-display">
              <img src="assets/ether-white.png" alt="" />
              <p>0x69.....2613</p>
            </div>
            <a href="https://twitter.com/" style={{ background: "#005677" }}>
              <img
                src="assets/twitter-white.png"
                alt=""
                className="twitter-img"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              style={{ background: "#49171a" }}
            >
              <img
                src="assets/instagram-white.png"
                alt=""
                className="instagram-img"
              />
            </a>
          </div>
          <p className="profile-bio">
            An elite society of 3333 unique 3D Fac Ilustrations entering the
            Solana realm to claim their kingdom!
          </p>
        </div>
        <div className="profile-button">
          <div className="listed-collection ">
            <p>Listed Collections (2)</p>
          </div>
          <div className="sold-collection">
            <p>Sold Collections (25)</p>
          </div>
          <div className="new-collection">
            <p>+ New Collection</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistProfile;
