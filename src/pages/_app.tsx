// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { useAuth } from "../lib/auth";
import { Header } from "../components/Layouts/Header";
import { Footer } from "../components/Layouts/Footer";

type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
  const isLoading = useAuth();

  return isLoading ? <div>Loading...</div> : children;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Auth>
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </Auth>
    </RecoilRoot>
  );
}

export default MyApp;
