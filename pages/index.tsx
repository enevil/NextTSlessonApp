import Head from "next/head";
import { Button, HTag, PTag, Tag } from "../components";

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
			<PTag size="l">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque minima tempora voluptatum ab suscipit,
				a consequuntur iure commodi porro similique numquam omnis, ea repudiandae beatae quis quam error quae
				officia! Velit harum, quidem numquam officiis cumque voluptatibus in minima quae enim porro asperiores
				doloremque maxime eius beatae amet eos temporibus! Adipisci iure reprehenderit reiciendis, quo ad a ab
				laborum quidem! Accusantium, quam! Ducimus totam eaque excepturi sint autem accusamus ab odio officiis
				quia asperiores optio, voluptas enim ullam dolores assumenda necessitatibus earum accusantium dolor nemo
				natus mollitia vero? Excepturi, doloribus. Dolor error ullam nisi non culpa, quis ipsam voluptatibus
				consequatur dolore reprehenderit fugiat inventore suscipit aut rem vel dolorum optio reiciendis odit.
				Deserunt labore omnis magni, repudiandae excepturi numquam nisi.
			</PTag>
			<Tag color="primary" href="https://hh.ru/">
				hh.ru
			</Tag>
		</div>
	);
}
