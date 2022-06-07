import React from "react";
// import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

function TopSearchBar() {
  const { ethers } = require("ethers");
  // const [wallet, setWallet] = useState([]);

  const connectWallet = async () => {
    const connectButton = document.getElementById("connect");

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "2958fe8f2fdf48cabe5f5aed0042b8c7",
        },
      },
    };

    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions,
    });
    console.log(web3Modal);

    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    console.log("Account:", await account);

    connectButton.innerHTML =
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
  };

  return (
    <>
      <div className="top-search-bar">
        <div className="search-box">
          <img src="assets/chevron-left.png" alt="back" />
          <div className="search-bar">
            <img
              src="assets/search-icon.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="text"
              placeholder="Search for Artists, Videos, or Genres"
            />
            <img src="assets/mic.png" alt="mic" className="mic-icon" />
          </div>
        </div>

        <div className="connect-button" onClick={connectWallet}>
          <img src="assets/Wallet.png" alt="img" />
          <h2 id="connect">Connect Wallet </h2>
        </div>
      </div>
    </>
  );
}

export default TopSearchBar;
