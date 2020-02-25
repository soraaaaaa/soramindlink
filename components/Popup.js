import React from "react";
import Link from "next/link";
import Axios from "axios";
import Router from "next/router";

const Popup = ({ state, invisibleClick, path, type, url, idNumber, event }) => {
  console.log(event);
  const deleteList = async e => {
    e.preventDefault();
    try {
      await Axios({
        method: "delete",
        url: `http://210.178.144.203:3000/v1/${url}`,
        headers: {
          Authentication:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWQiOiJhZG1pbiIsIm1iZXJfa2V5IjoiampjNWJwZ2Mwd3I4IiwiYXV0aG9yIjoiQURNSU4iLCJpYXQiOjE1ODI1Mjg2MzcsImV4cCI6MTU4MjUyODkzN30.ihwj6Ez33Zy0fSuHA4aGuTBSp3dEgLtmLcV4lk6gAtY"
        },
        data: {
          board_id: idNumber
        }
      });
      Router.push({ pathname: `/admin/${url}` });
      invisibleClick();
    } catch (e) {
      alert("오류가 발생하였습니다");
    }
  };

  if (type == 1) {
    return (
      <>
        <div className="pop_up">
          <div className="inner">
            <p>수정하시겠습니까?</p>
            <div className="btn_wrap">
              <Link href={`/admin${event}/edit/[id]`} as={path}>
                <a className="btn_y" onClick={invisibleClick}>
                  확인
                </a>
              </Link>
              <button onClick={invisibleClick}>취소</button>
            </div>
          </div>
          <style jsx global>
            {`
              .pop_up {
                display: ${state.visible == true ? "block" : "none"};
              }
            `}
          </style>
        </div>
      </>
    );
  }
  if (type == 2) {
    return (
      <>
        <div className="pop_up">
          <div className="inner">
            <p>삭제하시겠습니까?</p>
            <div className="btn_wrap">
              <button onClick={deleteList} className="btn_y">
                확인
              </button>
              <button onClick={invisibleClick}>취소</button>
            </div>
          </div>
          <style jsx global>
            {`
              .pop_up {
                display: ${state.visible == true ? "block" : "none"};
              }
            `}
          </style>
        </div>
      </>
    );
  }
  return null;
};

export default Popup;
