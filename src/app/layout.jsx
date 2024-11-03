import { MedievalSharp } from 'next/font/google';
import './global.css';
import Navbar from './components/Navbar';

export const revalidate = 3600;

const medievalSharpFont = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-medievalsharp'
});

export const metadata = {
  title: "Zoran's Pexels Gallery",
  description: "Zoranspiegel's Next.js Pexels Photo Gallery"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${medievalSharpFont.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
