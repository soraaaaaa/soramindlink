import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { show } from "../store/modules/popup";
import OpenBtn from "../components/OpenBtn";

function OpenContainer({ text }) {
  const state = useSelector(state => state.popup);

  const dispatch = useDispatch();

  const visibleClick = () => {
    dispatch(show());
  };
  return <OpenBtn visibleClick={visibleClick} text={text} />;
}

export default OpenContainer;
