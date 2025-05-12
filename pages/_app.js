import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/fontawesome.css';
import '../styles/themify-icons.css';
import '../styles/animate.css';
import '../styles/sass/main.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>E.visa - Immigration and Visa Consulting Next Js Template</title>
      </Head>
      <Component {...pageProps} />
    </div>

  )
}

export default MyApp
