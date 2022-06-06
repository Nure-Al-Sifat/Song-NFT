import React, { useState } from "react";
import popularGenres from "../../demoData/popularGenres";
import CardHeaderTitle from "../cardHeaderTitle/CardHeaderTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

function PopularList() {
  const [items] = useState(popularGenres);

  const swiperRef = React.useRef(null);

  return (
    <>
      <CardHeaderTitle
        HeaderTitle="Popular Genres"
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
                  <img src={item.img} alt="" />
                </div>
                <div className="card-details">
                  <div className="card-text">
                    <h3>{item.type}</h3>
                    <p>{item.amount}</p>
                  </div>
                  <div className="card-like">
                    <img src="assets/Heart.png" alt="like" />
                    <p>{item.like}</p>
                  </div>
                </div>
                <div className="card-button">
                  <div className="browse-btn">
                    <h4>Browse</h4>
                    <img src="assets/chevron-right.png" alt="right" />
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

export default PopularList;
