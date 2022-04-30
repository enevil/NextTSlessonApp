import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>TopApp</title>
				<meta name="description" content="Portfolio project powered by Next JS" />
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
