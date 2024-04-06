import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import { Toaster } from "react-hot-toast";
import { useLoadingWithRefresh } from "hooks/useLoadingWithRefresh";
import Footer from "./Footer";
import { useRouter } from "next/router";
import AwardWinner from "./awardWinner";

const Layout = ({ children }) => {
  const router = useRouter();
  const { loading } = useLoadingWithRefresh();

  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 10000);
  }, []);

  const path = router.pathname;

  return loading ? (
    <Loader />
  ) : (
    <>
    <div className="bg-primary">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <title>Track-On</title>
        <meta name="title" content="Track-On" />
        <meta
          name="description"
          content="TrackOn provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in Build-in public and Proof of Work."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.metrack.tech/" />
        <meta
          property="og:title"
          content="Track-On - Track your YouTube Learning"
        />
        <meta
          property="og:description"
          content="Track-On provides hand-picked YouTube courses, real-time discussions, sharing projects, and getting feedback on them. We believe in Build-in public and Proof of Work."
        />
     

        <meta property="twitter:card" content="summary_large_image" />
       
       
        
      </Head>
      {!path.includes("auth") && <Navbar />}
      <main className="w-11/12 min-h-screen mx-auto lg:w-10/12">
        {children}
      </main>
      <Toaster />
      {!path.includes("auth") && <Footer />}
      <AwardWinner show={show} />
      </div>
    </>
  );
};

export default Layout;
