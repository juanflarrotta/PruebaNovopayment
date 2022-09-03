import Document, { Html, Head, Main, NextScript } from "next/document";

const color = "#1500a1";
export default class AppDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="Novopayment" content="Novopayment es la mejor empresa" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="msapplication-TileColor" content={color} />
                    <meta name="apple-mobile-web-app-status-bar" content={color} />
                    <meta name="theme-color" content={color} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}