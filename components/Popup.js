import React from "react";
import Link from "next/link";

const Popup = ({ state, invisibleClick, path, type }) => {
  if (type == 1) {
    return (
      <>
        <div className="pop_up">
          <div className="inner">
            <p>수정하시겠습니까?</p>
            <div className="btn_wrap">
              <Link href="/admin/edit/[id]" as={path}>
                <a className="btn_y">확인</a>
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
              <button onClick={invisibleClick}>확인</button>
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
