import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import EventList from "../../components/EventList";

const index = () => {
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

  if (loading) {
    return 0;
  }

  if (!results) {
    return null;
  }
  return (
    <>
      <Head>
        <title>이벤트</title>
      </Head>
      <EventList results={results} key={currentPage} />
    </>
  );
};

export default index;
