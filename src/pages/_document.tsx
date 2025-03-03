import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Favicon */}
                    <link rel="icon" href="/favicon.ico" />
                    {/* Meta tags */}
                    <meta name="description" content="My Portfolio Website" />
                    {/* Preload critical routes */}
                    <link rel="preload" href="/craft" as="fetch" crossOrigin="anonymous" />
                    <link rel="preload" href="/projects" as="fetch" crossOrigin="anonymous" />
                    <link rel="preload" href="/photos" as="fetch" crossOrigin="anonymous" />
                    {/* Preload critical assets */}
                    <link rel="preload" href="/globe.svg" as="image" type="image/svg+xml" />
                    <link rel="preload" href="/file.svg" as="image" type="image/svg+xml" />
                    <link rel="preload" href="/window.svg" as="image" type="image/svg+xml" />
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
