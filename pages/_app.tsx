import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { AuthProvider } from "../src/context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
