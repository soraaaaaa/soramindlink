import App from "next/app";
import React from "react";
import CommonHead from "../components/Head";
import rootReducer from "../store/modules";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);
console.log("_appStore", store.getState());

export default class Root extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <CommonHead />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}
