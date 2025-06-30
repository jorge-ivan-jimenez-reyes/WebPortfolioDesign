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
                    {/* Google Fonts - Inter */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                    {/* Primary Excalidraw-style fonts with optimized weights */}
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;600;700&family=Caveat:wght@400;500;600;700&family=Architects+Daughter:wght@400&display=swap" 
                        rel="stylesheet" 
                    />
                    {/* Fallback handwritten fonts */}
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&family=Permanent+Marker&display=swap" 
                        rel="stylesheet" 
                    />
                    {/* Preload primary font for JORGE letters */}
                    <link 
                        rel="preload" 
                        href="https://fonts.gstatic.com/s/kalam/v16/YA9dr0Wd4kDdMtD6GgLI.woff2" 
                        as="font" 
                        type="font/woff2" 
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <div id="loading-indicator" style={{ display: 'none' }}>Loading...</div>
                    <Main />
                    <NextScript />
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            window.addEventListener('load', () => {
                                document.getElementById('loading-indicator').style.display = 'none';
                            });
                            window.addEventListener('beforeunload', () => {
                                document.getElementById('loading-indicator').style.display = 'block';
                            });
                        `
                    }} />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
