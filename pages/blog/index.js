import Head from "next/head";
import Link from "next/link";
import { getPosts } from "@/lib/db";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export default function Blog({ posts }) {
  const titulo = "Blog de SEO y Next.js | Mi Sitio Optimizado";
  const descripcion = `Artículos sobre SEO, meta tags y sitemaps en Next.js. ${posts.length} publicaciones con ejemplos prácticos.`;

  return (
    <>
      <Head>
        <title>{titulo}</title>
        <meta name="description" content={descripcion} />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:image" content={`${SITE_URL}/images/seo-image.png`} />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1>Blog</h1>
      {posts.map((post) => (
        <article key={post.slug} className="card">
          <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
          <p>{post.descripcion}</p>
          <small>Actualizado: {post.updated_at}</small>
        </article>
      ))}
    </>
  );
}

// Los posts se leen de la base de datos en cada petición
export async function getServerSideProps() {
  return { props: { posts: getPosts() } };
}
