import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  const titulo = "Optimización SEO en Next.js | Mi Sitio Optimizado";
  const descripcion = "Aprende a optimizar el SEO y el rendimiento de tu web con Next.js: meta tags, sitemap, imágenes y lazy loading.";

  return (
    <>
      <Head>
        <title>{titulo}</title>
        <meta name="description" content={descripcion} />
        <meta name="keywords" content="Next.js, SEO, optimización web, rendimiento" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:image" content={`${SITE_URL}/images/seo-image.png`} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>

      <Image
        src="/images/seo-image.png"
        width={800}
        height={400}
        alt="Banner SEO con Next.js"
        priority
        style={{ width: "100%", height: "auto", borderRadius: 8 }}
      />

      <DynamicComponent />
    </>
  );
}
