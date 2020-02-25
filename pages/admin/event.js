import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import AdminEventList from "../../components/AdminEventList";
import Link from "next/link";

const event = () => {
  const [results, setresults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const reponse = await axios({
          baseURL: "http://210.178.144.203:3000",
          method: "get",
          url: `/v1/event?cur_page=${currentPage}&size=10&page_size=10`
        });
        setresults(reponse.data.result);
        setPageSize(reponse.data.result.page_size);
        setTotalPage(reponse.data.result.totalPage);
        setCurrentPage(reponse.data.result.cur_page);
      } catch (e) {
        alert("오류가 발생하였습니다");
      }
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  if (!results) {
    return null;
  }
  return (
    <>
      <Header click="event" />
      <Layout>
        <h2 className="content_tit">공지사항</h2>
        <AdminEventList results={results} />
        <Link href="./event/eventWrite">
          <a className="btn_style" url="event">
            새 글 작성
          </a>
        </Link>
        <style jsx>
          {`
            a {
              text-align: center;
              line-height: 34px;
              margin-top: 20px;
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export default event;
