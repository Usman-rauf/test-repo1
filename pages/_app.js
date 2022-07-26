import "../styles/globals.scss";
import Layout from "../components/__common/LandingLayout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
// namig
