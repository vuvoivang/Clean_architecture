import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="Clean Arch" content="Clean Arch |" />
          <meta property="og:locale" content="vi_VN"></meta>
          <meta property="og:type" content="website"></meta>
          <meta
            property="og:title"
            content="Home Page - Independent of Frameworks."
          ></meta>
          <meta
            property="og:description"
            content="Practical Software Architecture Solutions from the Legendary Robert C. Martin (“Uncle Bob”) By applying universal rules of software architecture, you can dramatically improve developer productivity throughout the life of any software system..."
          ></meta>

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          />
          <title>Clean Architecture with NextJS</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
