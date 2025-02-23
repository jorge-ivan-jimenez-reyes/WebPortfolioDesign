// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body style={{ overflow: 'hidden', overscrollBehavior: 'none' }}>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
