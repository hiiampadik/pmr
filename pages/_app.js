import "../styles/globals.scss";
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {

    if (typeof window !== "undefined") {
        ReactGA.initialize('G-PV0H6J5W2Y');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
