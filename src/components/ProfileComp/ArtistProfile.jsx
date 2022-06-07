import React, { useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

function ArtistProfile() {
  useEffect(() => {
    loadProfile();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "2958fe8f2fdf48cabe5f5aed0042b8c7",
      },
    },
  };

  const loadProfile = async () => {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions,
    });

    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const account = await signer.getAddress();

    const wallet = document.getElementById("wallet");
    if (account) {
      wallet.innerHTML =
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        account[5] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
    }
  };
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
              <p id="wallet">0x69.....2613</p>
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
