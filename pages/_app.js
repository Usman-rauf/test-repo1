import "../styles/globals.scss";
import Layout from "../Components/__common/LandingLayout";
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
