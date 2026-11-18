import Head from "next/head";
import Link from "next/link";
import { getPostBySlug } from "@/lib/db";
import { SITE_URL, SITE_NAME } from "@/lib/site";

// Los meta tags salen del registro de la base de datos: cada artículo tiene los suyos
export default function Post({ post }) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const titulo = `${post.titulo} | Blog ${SITE_NAME}`;

  return (
    <>
      <Head>
        <title>{titulo}</title>
        <meta name="description" content={post.descripcion} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.titulo} />
        <meta property="og:description" content={post.descripcion} />
        <meta property="og:image" content={`${SITE_URL}/images/seo-image.png`} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="article:modified_time" content={post.updated_at} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Link href="/blog">← Volver al blog</Link>
      <h1>{post.titulo}</h1>
      <p><small>Actualizado: {post.updated_at}</small></p>
      <p>{post.contenido}</p>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true }; // slug inexistente → 404
  return { props: { post } };
}
