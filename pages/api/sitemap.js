import { getPosts } from "@/lib/db";
import { SITE_URL } from "@/lib/site";

export default async function handler(req, res) {
  // 1. Rutas fijas del sitio
  const estaticas = [
    { loc: "/", priority: "1.0" },
    { loc: "/blog", priority: "0.8" },
    { loc: "/contacto", priority: "0.5" },
  ];

  // 2. Rutas dinámicas: una por cada post guardado en la base de datos
  const posts = getPosts().map((post) => ({
    loc: `/blog/${post.slug}`,
    lastmod: post.updated_at,
    priority: "0.7",
  }));

  // 3. Cada ruta se convierte en un bloque <url>
  const urls = [...estaticas, ...posts]
    .map((u) => {
      const lastmod = u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : "";
      return `<url><loc>${SITE_URL}${u.loc}</loc>${lastmod}<priority>${u.priority}</priority></url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}
