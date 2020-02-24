import React from "react";
import Link from "next/link";

function Header({ click }) {
  return (
    <>
      <div id="header">
        <div className="header_inner">
          <h1>
            <Link href="/">
              <a>
                <img
                  src="/static/img/real_logo.png"
                  alt="리뷰얼마 관리자"
                  className="img"
                />
              </a>
            </Link>
          </h1>
          <div className="login_wrap">
            <Link href="/Login">
              <a>로그인</a>
            </Link>
          </div>
        </div>
        <style jsx>
          {`
            #header {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 58px;
              background-color: #fff;
              border-bottom: 1px solid #e5e5eb;
            }
            .header_inner {
              max-width: 1580px;
              min-width: 215px;
              display: flex;
              justify-content: space-between;
              padding: 0 25px;
            }
            h1 {
              padding-top: 18px;
            }
            .img {
              width: 131px;
              display: block;
            }
            .login_wrap {
              padding-top: 20px;
            }
          `}
        </style>
      </div>
      <div id="gnb">
        <ul>
          <li className="gnb_list notice">
            <Link href="/admin/board">
              <a>공지사항</a>
            </Link>
          </li>
          <li className="gnb_list event">
            <Link href="/admin/event">
              <a>이벤트</a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            #gnb {
              position: fixed;
              top: 59px;
              left: 0;
              width: 217px;
              height: 100%;
              background-color: #fff;
              border-right: 1px solid #e5e5eb;
            }
            .gnb_list {
              height: 54px;
              border-bottom: 1px solid #e5e5eb;
              line-height: 54px;
              font-size: 16px;
              padding-left: 25px;
            }
            .notice {
              background: ${click == "notice" ? "#f6f6fb" : "#fff"};
            }
            .event {
              background: ${click == "event" ? "#f6f6fb" : "#fff"};
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Header;
