import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="This is caio's space" />
        <link
          href="https://fonts.cdnfonts.com/css/akira-expanded"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins&display=swap"
          rel="stylesheet"
       />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
