import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="true"
          ></link>
          <link rel="dns-prefetch" href="//fonts.googleapis.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script:wght@400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />
        <style jsx global>{`
          @import "tailwindcss/base";
          @import "tailwindcss/components";
          @import "tailwindcss/utilities";

          * {
            -webkit-user-drag: none;
            -webkit-app-region: no-drag;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          html {
            font-family: "Inter", sans-serif;
          }

          mark {
            background-color: unset;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;
