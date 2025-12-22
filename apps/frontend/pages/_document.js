import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/ruthvik.png" />
        <link rel="apple-touch-icon" href="/ruthvik.png" />
        
        {/* Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="keywords" content="Ruthvik Hospitals, Hospital Visakhapatnam, Healthcare, Medical Services, Orthopaedic Surgery, General Surgery, Laparoscopy, Emergency Care" />
        <meta name="author" content="Ruthvik Hospitals" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="Ruthvik Hospitals" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
