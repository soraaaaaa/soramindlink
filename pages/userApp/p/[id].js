import EventDetail from "../../../components/EventDetail";
import axios from "axios";
import Head from "next/head";

const eventDetail = props => {
  return (
    <>
      <Head>
        <title>{props.contents.result.TIT}</title>
      </Head>
      <EventDetail lists={props} />
    </>
  );
};
eventDetail.getInitialProps = async context => {
  const { id } = context.query;
  const res = await axios.get(`http://210.178.144.203:3000/v1/event/${id}`);
  return { contents: res.data };
};

export default eventDetail;
