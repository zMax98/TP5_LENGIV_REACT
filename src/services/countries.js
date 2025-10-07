const BASE = 'https://restcountries.com/v3.1';

export async function searchCountriesByName(q) {
  const res = await fetch(`${BASE}/name/${encodeURIComponent(q)}?fields=name,capital,region,population,flags,currencies,cca2`);
  if (!res.ok) {
    const msg = `Error ${res.status} consultando países`;
    throw new Error(msg);
  }
  return await res.json();
}
