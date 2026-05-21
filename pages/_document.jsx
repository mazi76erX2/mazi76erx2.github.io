// Default core packages
import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Load custom scripts in <Head>
 *
 * @returns <Html>
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#1a1a2e" />

        {/* Load Devicon from CDN to avoid BOM parsing issues */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
