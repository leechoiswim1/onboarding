import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="mainbar">
      <div className="mainbar_main">
        <nav className="mainbar_nav">
          <div className="mainbar_top">
            <section className="mainbar_top__section">
              <button>
                <i class="fas fa-bars "></i>
              </button>
              <a href="/">wanted</a>
            </section>
            <button className="mainbar_top__sidebtn"> 회원가입하기</button>
          </div>
          <ul className="mainbar_nav__menu">
            <li id="xsOnly">
              <a href="/" id="home_btn">
                홈
              </a>
            </li>
            <li>
              <a href="/">채용</a>
            </li>
            <li>
              <a href="/">이벤트</a>
            </li>
            <li id="smMoreVisible">
              <a href="/"> 직군별 연봉</a>
            </li>
            <li id="smMoreVisible">
              <a href="/">이력서</a>
            </li>
            <li id="smMoreVisible">
              <a href="/">
                커뮤니티<span>New</span>
              </a>
            </li>
            <li id="smMoreVisible">
              <a href="/">프리랜서</a>
            </li>
            <li id="smMoreVisible">
              <a href="/">
                AI 합격예측<span>Beta</span>
              </a>
            </li>
          </ul>
          <aside className="menubar_aside">
            <ul>
              <li>
                <i class="fas fa-search"></i>
              </li>
              <li class="noti_btn">
                <i class="far fa-bell"></i>
                <span>N</span>
              </li>
              <li class="profile_btn" id="mdMoreVisible">
                <img
                  src="https://static.wanted.co.kr/images/profile_default.png"
                  alt="wanted_logo"
                />
                <span>N</span>
              </li>
              <li class="service_btn" id="mdMoreVisible">
                <a>기업서비스</a>
              </li>
              <li class="setting_btn">
                <i class="fas fa-ellipsis-h"></i>
              </li>
            </ul>
          </aside>
        </nav>
      </div>
    </div>
  );
};

export default Header;
