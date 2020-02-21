import Header from "../../components/Header";
import Layout from "../../components/Layout";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../components/editor"), {
  ssr: false
});

const write = () => {
  return (
    <>
      <Header />
      <Layout>
        <h2 className="content_tit">새 글 작성</h2>
        <form onSubmit={console.log("submit")}>
          <div className="input_wrap">
            <h3>제목</h3>
            <input type="text" className="tit_input" />
          </div>
          <Editor content="" />
          <button tpye="submit" className="btn_style">
            저장
          </button>
        </form>
      </Layout>
      <style jsx>
        {`
          .btn_style {
            margin-top: 20px;
          }
        `}
      </style>
    </>
  );
};

export default write;
