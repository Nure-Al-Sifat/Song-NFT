import React from "react";
import Child from "../../components/mainChild/Child";
import Sidebar from "../../components/sidebar/Sidebar";
import TopSearchBar from "../../components/topSearchBar/TopSearchBar";
import "./Home.css";

function Home() {
  return (
    <>
      <Sidebar />
      <TopSearchBar />
      <div className="main-section">
        <Child />
      </div>
    </>
  );
}

export default Home;
