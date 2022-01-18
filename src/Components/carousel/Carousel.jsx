import React, { useState, useEffect, useRef } from "react";
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
  const TOTAL_SLIDES = 9;
  const [currentSlide, setCurrentSlide] = useState(4);
  const view = (100 / TOTAL_SLIDES) * currentSlide;
  const imageInfos = [
    { url: image1, title: "제목1", desc: "이것은 설명입니다." },
    { url: image2, title: "제목2", desc: "이것은 설명입니다." },
    { url: image3, title: "제목3", desc: "이것은 설명입니다." },
    { url: image4, title: "제목4", desc: "이것은 설명입니다." },
    { url: image5, title: "제목5", desc: "이것은 설명입니다." },
    { url: image6, title: "제목6", desc: "이것은 설명입니다." },
    { url: image7, title: "제목7", desc: "이것은 설명입니다." },
    { url: image8, title: "제목8", desc: "이것은 설명입니다." },
    { url: image9, title: "제목9", desc: "이것은 설명입니다." },
  ];

  const [slides, setSlides] = useState(imageInfos);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide > slides.length - 1) {
      const _imageInfos = [...slides, ...slides.slice(0, 1)].slice(
        -slides.length
      );
      setSlides(_imageInfos);

      setCurrentSlide(currentSlide === slides.length ? 0 : currentSlide + 1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide < 1) {
      const _imageInfos = [...slides.slice(-1), ...slides].slice(
        0,
        slides.length
      );
      setSlides(_imageInfos);
      setCurrentSlide(currentSlide === 0 ? slides.length : currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide * 10}%)`;

    // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <main className="slider_main">
      <div className="slider_wrapper">
        <div className="slider_inner">
          <div className="slider_list">
            <div className="slider_track" ref={slideRef}>
              {slides.map((imageinfo, idx) => {
                const active = idx === currentSlide ? true : false;
                return (
                  <Slide imageinfo={imageinfo} key={idx} active={active} />
                );
              })}
            </div>
          </div>
          <button className="slider_btn nextarrow" onClick={nextSlide}>
            <span className="slider_btn__nextarrow_icon">
              <i class="fas fa-chevron-right"></i>
            </span>
          </button>
          <button className="slider_btn prevarrow" onClick={prevSlide}>
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
