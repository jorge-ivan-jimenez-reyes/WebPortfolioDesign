import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Favicon */}
                    <link rel="icon" href="/favicon.ico" />
                    {/* Meta tags */}
                    <meta name="description" content="My Portfolio Website" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
