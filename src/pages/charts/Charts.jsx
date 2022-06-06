import React, { useState } from "react";
import CustomButton from "../../components/button/CustomButton";
import Sidebar from "../../components/sidebar/Sidebar";
import TopSearchBar from "../../components/topSearchBar/TopSearchBar";
import ChartData from "../../demoData/chartData";

function Charts() {
  const [items] = useState(ChartData);

  return (
    <>
      <TopSearchBar />
      <Sidebar />
      <toolbar />
      <div className="main-section chart-page">
        <h1>Charts</h1>
        <div className="charts-button">
          <div className="custom-button-left">
            <CustomButton className="left-btn " btnName="Artists" />
            <CustomButton className="left-btn" btnName="Collectors" />
            <CustomButton className="left-btn" btnName="Videos" />
          </div>
          <div className="custom-button-right">
            <CustomButton className="right-btn " btnName="All Time" />
            <CustomButton className="right-btn" btnName="7D " />
            <CustomButton className="right-btn" btnName="30D" />
          </div>
        </div>
        <div className="chart-title">
          <div class="table-box">
            <div class="table-row table-head">
              <div class="table-cell first-cell">
                <p># Rank</p>
              </div>
              <div class="table-cell secondary-cell">
                <p>Total Streams</p>
              </div>
              <div class="table-cell secondary-cell">
                <p>Unique Collectors</p>
              </div>
              <div class="table-cell secondary-cell">
                <p>Editions Sold</p>
              </div>
              <div class="table-cell secondary-cell">
                <p>Primary Sales</p>
              </div>
              <div class="table-cell secondary-cell">
                <p>Secondary Sales</p>
              </div>
              <div class="table-cell secondary-cell">
                <p>Total Sales</p>
              </div>
            </div>

            {items.map((item, index) => (
              <div class="table-row">
                <div class="table-cell first-cell">
                  {item.id}
                  <img src={item.img} alt="" />
                  <div className="first-cell-content">
                    <p>{item.name}</p>
                    <p className="secound-p">{item.userName}</p>
                  </div>
                </div>
                <div class="table-cell secondary-cell">
                  <p>{item.tStreams}</p>
                </div>
                <div class="table-cell secondary-cell">
                  <p>{item.uCollectors}</p>
                </div>
                <div class="table-cell secondary-cell">
                  <p>{item.eSold}</p>
                </div>
                <div class="table-cell secondary-cell">
                  <p>{item.pSales}</p>
                </div>
                <div class="table-cell secondary-cell">
                  <p>{item.sSales}</p>
                </div>
                <div class="table-cell secondary-cell">
                  <p>{item.tSales}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Charts;
