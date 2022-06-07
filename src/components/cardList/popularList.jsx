import React, { useState } from "react";
import popularGenres from "../../demoData/popularGenres";
import CardHeaderTitle from "../cardHeaderTitle/CardHeaderTitle";

// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

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
