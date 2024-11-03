import { MedievalSharp } from 'next/font/google';
import './global.css';
import Navbar from './components/Navbar';

const medievalSharpFont = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-medievalsharp'
});

export const metadata = {
  title: 'Pexel Gallery',
  description: "Zoranspiegel's Next.js Pexel Photo Gallery"
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
