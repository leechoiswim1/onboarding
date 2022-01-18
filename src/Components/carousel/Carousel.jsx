import React, { useState } from "react";
import "./Carousel.css";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import Slide from "./Slide";

const Carousel = () => {
  const imageInfos = [
    { url: image1, title: "제목", desc: "이것은 설명입니다." },
    { url: image2, title: "제목", desc: "이것은 설명입니다." },
    { url: image3, title: "제목", desc: "이것은 설명입니다." },
    { url: image4, title: "제목", desc: "이것은 설명입니다." },
    { url: image5, title: "제목", desc: "이것은 설명입니다." },
    { url: image6, title: "제목", desc: "이것은 설명입니다." },
    { url: image7, title: "제목", desc: "이것은 설명입니다." },
    { url: image8, title: "제목", desc: "이것은 설명입니다." },
    { url: image9, title: "제목", desc: "이것은 설명입니다." },
  ];

  return (
    <main className="slider_main">
      <div className="slider_wrapper">
        <div className="slider_inner">
          <div className="slider_list">
            <div className="slider_track">
              {imageInfos.map((imageinfo, idx) => {
                return <Slide imageinfo={imageinfo} key={idx} />;
              })}
            </div>
          </div>
          <button type="button" className="slider_btn nextarrow">
            <span className="slider_btn__nextarrow_icon">
              <i class="fas fa-chevron-right"></i>
            </span>
          </button>
          <button type="button" className="slider_btn prevarrow">
            <span className="slider_btn__nextarrow_icon">
              <i class="fas fa-chevron-left"></i>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Carousel;
