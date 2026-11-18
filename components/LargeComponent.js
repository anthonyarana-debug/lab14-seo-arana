// Componente "pesado" de ejemplo: solo se descarga cuando la página lo necesita
export default function LargeComponent() {
  const items = Array.from({ length: 12 }, (_, i) => `Elemento cargado dinámicamente #${i + 1}`);

  return (
    <section style={{ marginTop: 16, padding: 16, border: "2px dashed #0070f3", borderRadius: 8 }}>
      <h2>LargeComponent (lazy loading)</h2>
      <p>Este bloque viene en un archivo JS separado, cargado con next/dynamic.</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
