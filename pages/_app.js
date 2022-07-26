import "../styles/globals.css";
import Layout from '../Components/__common/LandingLayout/index'
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