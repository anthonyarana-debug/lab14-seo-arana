import "@/styles/globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
      <div className="contenedor">
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
