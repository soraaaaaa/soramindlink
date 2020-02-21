import Head from "next/head";

function CommonHead() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0 user-scalable=no"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        <link href="/static/css/index.css" rel="stylesheet"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/img/favicon_32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/static/img/favicon_196.png"
        />

        <title>리뷰얼마</title>
      </Head>
    </>
  );
}
export default CommonHead;
