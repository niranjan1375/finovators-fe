import useKonamiCode from "finovators/commons/hooks/useKonamiCode";
import Footer from "finovators/components/Footer";
import "finovators/styles/globals.css";
import { useRouter } from "next/router";

const hideFooterOn = ["/onepiece"]; 

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useKonamiCode();
    return (
        <>
        <Component {...pageProps} />
        {hideFooterOn.includes(router.pathname) ? null : <Footer />}
        </>
    );
}
