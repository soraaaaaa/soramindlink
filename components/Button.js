const Button = props => {
  return (
    <>
      <button type={props.type}>{props.text}</button>
      <style jsx>{`
        button {
          border-radius: 4px;
          border: 1px solid #e7e7f2;
          width: 118px;
          height: 34px;
          backgroud-color: ${props.bgcolor};
        }
        button + button {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
};

export default Button;
