import React, { useState } from "react";
import trendingVideos from "../../demoData/trendingVideos";
import CardHeaderTitle from "../cardHeaderTitle/CardHeaderTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

function CardList() {
  const [items] = useState(trendingVideos);

  const swiperRef = React.useRef(null);

  return (
    <>
      <CardHeaderTitle
        HeaderTitle="Trending Videos"
        slidePrev={() => swiperRef.current.swiper.slidePrev()}
        slideNext={() => swiperRef.current.swiper.slideNext()}
      />

      <div className="card-list">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          ref={swiperRef}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="card-img">
                  <img src={item.songImg} alt="" />
                </div>
                <div className="card-details">
                  <img src={item.ArtistImg} alt="" />
                  <div className="card-text">
                    <h3>{item.song}</h3>
                    <p>{item.Artist}</p>
                  </div>
                  <div className="card-like">
                    <img src="assets/Heart.png" alt="like" />
                    <p>{item.like}</p>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CardList;
