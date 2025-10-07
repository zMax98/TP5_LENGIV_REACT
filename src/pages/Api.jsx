import { useState } from 'react';
import { searchCountriesByName } from '../services/countries.js';
import CountryCard from '../components/CountryCard.jsx';
import './Api.css';

export default function Api(){
  const [q, setQ] = useState('Argentina');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  async function onSubmit(e){
    e.preventDefault();
    if(!q.trim()) return;
    setLoading(true);
    setErr(null);
    try {
      const data = await searchCountriesByName(q.trim());
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      setErr(e.message || 'Error consultando API');
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="api-section">
      <h2>Página API (REST Countries)</h2>
      <p>Buscá un país por nombre en inglés (ej: <em>Argentina</em>, <em>Peru</em>, <em>Spain</em>).</p>

      <form onSubmit={onSubmit} className="api-form">
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Ingrese un país"
          className="api-input"
        />
        <button type="submit" disabled={loading} className="api-btn">
          {loading ? 'Buscando…' : 'Buscar'}
        </button>
      </form>

      {err && <div className="api-error">⚠ {err}</div>}

      <div className="api-results">
        {items.map((c) => (
          <CountryCard key={`${c.cca2}-${c?.name?.official}`} c={c} />
        ))}
      </div>
    </section>
  );
}
