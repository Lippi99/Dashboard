import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
