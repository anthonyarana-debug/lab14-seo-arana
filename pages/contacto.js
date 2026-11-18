import Head from "next/head";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export default function Contacto() {
  const titulo = "Contacto | Mi Sitio Optimizado - Consultas sobre SEO";
  const descripcion = "Escríbenos para resolver tus dudas sobre optimización SEO y rendimiento web con Next.js. Respondemos en menos de 24 horas.";

  return (
    <>
      <Head>
        <title>{titulo}</title>
        <meta name="description" content={descripcion} />
        <link rel="canonical" href={`${SITE_URL}/contacto`} />
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:image" content={`${SITE_URL}/images/seo-image.png`} />
        <meta property="og:url" content={`${SITE_URL}/contacto`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1>Contacto</h1>
      <p>¿Tienes dudas sobre SEO? Déjanos tu mensaje.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo" />
        <textarea rows={4} placeholder="Mensaje" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
