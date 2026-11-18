import { DatabaseSync as Database } from "node:sqlite";
import path from "path";

// Base de datos SQLite local (se crea sola en /data/blog.db la primera vez)
const db = new Database(path.join(process.cwd(), "data", "blog.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    slug        TEXT UNIQUE NOT NULL,
    titulo      TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    contenido   TEXT NOT NULL,
    updated_at  TEXT NOT NULL
  )
`);

// Datos de ejemplo si la tabla está vacía
const { total } = db.prepare("SELECT COUNT(*) AS total FROM posts").get();
if (total === 0) {
  const insert = db.prepare(
    "INSERT INTO posts (slug, titulo, descripcion, contenido, updated_at) VALUES (?, ?, ?, ?, ?)"
  );
  insert.run("que-es-seo", "¿Qué es el SEO y por qué importa?",
    "Guía básica de SEO: cómo Google rastrea, indexa y posiciona tu sitio web.",
    "El SEO (Search Engine Optimization) agrupa las técnicas para que un sitio aparezca mejor en los buscadores.",
    "2026-11-10");
  insert.run("meta-tags-nextjs", "Meta tags dinámicos en Next.js",
    "Cómo usar next/head para definir title, description y Open Graph en cada página.",
    "Con el componente Head de Next.js cada página puede tener sus propias etiquetas meta.",
    "2026-11-14");
  insert.run("sitemap-dinamico", "Sitemap dinámico desde una base de datos",
    "Genera un sitemap.xml que se actualiza solo con cada artículo nuevo de tu blog.",
    "Un endpoint de API lee las rutas desde la base de datos y arma el XML en cada petición.",
    "2026-11-17");
}

export function getPosts() {
  return db.prepare("SELECT slug, titulo, descripcion, updated_at FROM posts ORDER BY updated_at DESC").all();
}

export function getPostBySlug(slug) {
  return db.prepare("SELECT * FROM posts WHERE slug = ?").get(slug);
}
