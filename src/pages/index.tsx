import type { NextPage } from "next";
import Head from "next/head";
import { Login } from "../components/Login";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>AppName</title>
      </Head>
      <Login />
    </div>
  );
};

export default Home;
