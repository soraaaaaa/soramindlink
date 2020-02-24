import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Popup from "../components/Popup";
import { hide } from "../store/modules/popup";

function PopupContainer({ path, url, idNumber }) {
  const state = useSelector(state => state.popup);

  const dispatch = useDispatch();

  const invisibleClick = () => {
    dispatch(hide());
  };
  return (
    <Popup
      state={state}
      invisibleClick={invisibleClick}
      path={path}
      type={state.type}
      url={url}
      idNumber={idNumber}
    />
  );
}

export default PopupContainer;
