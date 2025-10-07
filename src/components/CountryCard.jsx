export default function CountryCard({ c }) {
  const name = c?.name?.official ?? 'N/D';
  const capital = Array.isArray(c?.capital) ? c.capital.join(', ') : (c?.capital ?? 'N/D');
  const region = c?.region ?? 'N/D';
  const population = c?.population?.toLocaleString?.() ?? 'N/D';
  const flagPng = c?.flags?.png || c?.flags?.svg;
  const code = c?.cca2 ?? 'N/D';

  let currency = 'N/D';
  if (c?.currencies) {
    const [k] = Object.keys(c.currencies);
    if (k) {
      const cur = c.currencies[k];
      currency = `${k} – ${cur?.name ?? ''}`.trim();
    }
  }

  return (
    <article style={styles.card}>
      {flagPng && (
        <img src={flagPng} alt={`Flag of ${name}`} style={styles.img} />
      )}
      <div style={styles.info}>
        <h3 style={{margin: '0 0 .25rem 0'}}>{name}</h3>
        <p style={p}><strong>Código:</strong> {code}</p>
        <p style={p}><strong>Capital:</strong> {capital}</p>
        <p style={p}><strong>Región:</strong> {region}</p>
        <p style={p}><strong>Población:</strong> {population}</p>
        <p style={p}><strong>Moneda:</strong> {currency}</p>
      </div>
    </article>
  );
}

const p = { margin: '.15rem 0' };

const styles = {
  card: {
    display: 'grid',
    gridTemplateColumns: '120px 1fr',
    gap: '12px',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    background: '#fff'
  },
  img: {
    width: '120px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '6px',
    border: '1px solid #eee'
  },
  info: { fontSize: '0.95rem', color: '#222' }
};
