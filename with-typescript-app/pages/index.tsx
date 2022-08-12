import type { NextPage } from "next";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../components/App"), { ssr: false });

const Home: NextPage = () => {
  return <App />;
};

export default Home;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
