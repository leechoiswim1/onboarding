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

const Carousel = ({ callBtn }) => {
  const [currentSlide, setCurrentSlide] = useState(4);

  const imageInfos = [
    {
      url: image1,
      title: "마케팅 주니어를 찾습니다",
      desc: "기업 과제 풀고 취업까지 한번에!",
    },
    {
      url: image2,
      title: "포트폴리오를 부탁해!",
      desc: "디자이너의 포폴 살펴보기",
    },
    {
      url: image3,
      title: "해, 커리어 EP 02 공개",
      desc: "마지막 관문 2라운드의 승자는?",
    },
    {
      url: image4,
      title: "개발자 되고싶은 분들!?",
      desc: "프론트엔드 무료 교육과정 참여하기",
    },
    {
      url: image5,
      title: "2022년 달라지는 노동법령",
      desc: "노무관리 쟁점 한 눈에 파악하기",
    },
    {
      url: image6,
      title: "개발자 성장 비결 공개!",
      desc: "Velog, 글 쓰는 개발자들의 이야기",
    },
    {
      url: image7,
      title: "성장하는 개발자가 되려면?",
      desc: "○○○ 검색하지 말 것!",
    },
    {
      url: image8,
      title: "UX 디자이너의 커리어 설계",
      desc: "브랜드 가치를 더하는 디자인",
    },
    {
      url: image9,
      title: "성과를 내는 마케팅",
      desc: "실제 사례를 공개합니다!",
    },
  ];
  const [slides, setSlides] = useState(imageInfos);
  const slideRef = useRef(null);

  //슬라이드 버튼 함수
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

  //슬라이드 위치 조절
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    const viewWidth =
      -((slideRef.current.clientWidth / 9) * currentSlide) +
      (window.innerWidth - slideRef.current.firstChild.firstChild.clientWidth) /
        2;

    slideRef.current.style.transform = `translateX(${viewWidth - 24}px)`;
  }, [currentSlide]);

  //스와이프
  const [touchZone, setTouchZone] = useState("");
  const handleTouchMove = (event) => {
    setTouchZone(event.changedTouches[0].clientX);
  };
  const handleTouchEnd = (event) => {
    if (touchZone) {
      if (
        event.changedTouches[0].clientX <
        (event.changedTouches[0].screenX * 2) / 5
      ) {
        prevSlide();
      } else if (
        event.changedTouches[0].clientX >
        (event.changedTouches[0].screenX * 2) / 5
      ) {
        nextSlide();
      }
    }
  };
  return (
    <main className="slider_main">
      <div className="slider_wrapper">
        <div className="slider_inner">
          <div className="slider_list">
            <div
              className="slider_track"
              ref={slideRef}
              onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
              onTouchEnd={(touchEndEvent) => handleTouchEnd(touchEndEvent)}
            >
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
