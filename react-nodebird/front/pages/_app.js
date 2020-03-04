import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import PropTypes from "prop-types";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout >
        <Component />
      </AppLayout>
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType
};

export default NodeBird;
