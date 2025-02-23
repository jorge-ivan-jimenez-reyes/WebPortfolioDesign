// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Favicon */}
                    <link rel="icon" href="/favicon.ico" />
                    {/* Additional meta tags or links can go here */}
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
