import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopSearchBar from "../../components/topSearchBar/TopSearchBar";
import ArtistProfile from "../../components/ProfileComp/ArtistProfile";
import Card from "../../components/card/Card";

function ArtistProfilePage() {
  return (
    <>
      <Sidebar />
      <TopSearchBar />
      <div className="main-section ">
        <ArtistProfile />
        <div className="card-display">
          <Card ArtistImg="" song="Big Subwoofer" Artist="Snoop Dogg" />
          <Card />
          <Card />
          <Card />
          {/* <BottomMusicCard /> */}
        </div>
      </div>
    </>
  );
}

export default ArtistProfilePage;
