import Head from "next/head";
import { Button, HTag } from "../components";

export default function Home() {
	return (
		<div>
			<Head>
				<title>TopApp</title>
				<meta name="description" content="Portfolio project powered by Next JS" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<HTag tag="h1">Text</HTag>
			<Button appearance="ghost" arrow="down">
				Aboba
			</Button>
			<Button appearance="primary" arrow="down">
				Abobaxx
			</Button>
		</div>
	);
}
