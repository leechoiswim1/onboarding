import React from "react";
import "./Slide.css";
const Slide = ({ imageinfo, active }) => {
  return (
    <div className={active ? "slider_slide active_slide" : "slider_slide"}>
      <div style={{ margin: "20px 10px" }}>
        <div className="slide_main__banner">
          <div className="slide_image">
            <a href="/">
              <img src={imageinfo.url}></img>
            </a>
          </div>
          <div
            className={
              active ? "slide_information active_info" : "slide_information"
            }
          >
            <h2>{imageinfo.title}</h2>
            <h3>{imageinfo.desc}</h3>
            <hr></hr>
            <a href="/" className="slide_link">
              <span className="slide_link_label">
                바로가기
                <span className="slide_link_endicon">
                  <span></span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
