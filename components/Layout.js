const Layout = props => {
  return (
    <>
      <div className="layout">
        <div className="inner">{props.children}</div>
        <style jsx>
          {`
            .layout {
              padding: 150px 0 0 218px;
              max-width: 1700px;
            }
            .inner {
              width: 1100px;
              margin: 0 auto;
              padding: 0 26px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Layout;
