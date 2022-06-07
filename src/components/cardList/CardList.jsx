import React, { useState } from "react";
import trendingVideos from "../../demoData/trendingVideos";
import CardHeaderTitle from "../cardHeaderTitle/CardHeaderTitle";

import "swiper/modules/free-mode/free-mode.min.css";
// import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

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
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1500: {
              width: 1500,
              slidesPerView: 4,
            },
          }}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          ref={swiperRef}
          // modules={[FreeMode, Pagination]}
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
