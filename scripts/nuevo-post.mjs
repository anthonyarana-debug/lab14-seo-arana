// Inserta un post nuevo en la base de datos para comprobar que el sitemap se actualiza solo.
// Uso: node scripts/nuevo-post.mjs
import { DatabaseSync as Database } from "node:sqlite";

const db = new Database("data/blog.db");
const hoy = new Date().toISOString().slice(0, 10);

db.prepare(
  "INSERT OR IGNORE INTO posts (slug, titulo, descripcion, contenido, updated_at) VALUES (?, ?, ?, ?, ?)"
).run(
  "optimizar-imagenes",
  "Optimizar imágenes con next/image",
  "Cómo next/image convierte tus imágenes a WebP y reduce su peso automáticamente.",
  "El componente Image genera versiones redimensionadas y en formatos modernos según el navegador.",
  hoy
);

console.log("Post agregado. Posts en la BD:", db.prepare("SELECT COUNT(*) AS n FROM posts").get().n);
