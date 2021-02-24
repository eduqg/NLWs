import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link rel="shortcut icon" href="favicon.png" type="image/png"/>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          {/* Mostra nossas páginas */}
          <Main />

          {/* Alguns scripts que o Next.js injeta na página */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
