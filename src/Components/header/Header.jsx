import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="mainbar">
      <div className="mainbar_main">
        <nav className="mainbar_nav">
          <div className="mainbar_top">
            <section className="mainbar_top__section">
              <button type="button">
                <i class="fas fa-bars "></i>
              </button>
              <a href="/">wanted</a>
            </section>
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
                <button type="button" className="search_btn">
                  <i class="fas fa-search"></i>
                </button>
              </li>
              <li className="menubar_aside__noti_list">
                <button type="button" className="noti_btn">
                  <i class="far fa-bell"></i>
                  <span>N</span>
                </button>
              </li>
              <li id="mdMoreVisible">
                <button type="button" className="profile_btn">
                  <img
                    src="https://static.wanted.co.kr/images/profile_default.png"
                    alt="wanted_logo"
                  />
                  <span>N</span>
                </button>
              </li>

              <li class="service_btn" id="mdMoreVisible">
                <a>기업서비스</a>
              </li>
              <li>
                <button type="button" className="setting_btn">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </li>
            </ul>
          </aside>
        </nav>
      </div>
    </div>
  );
};

export default Header;
