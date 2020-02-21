const OpenBtn = ({ text, visibleClick }) => {
  return (
    <>
      <button className="btn_style" onClick={visibleClick}>
        {text}
      </button>
    </>
  );
};

export default OpenBtn;
