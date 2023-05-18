const API = 'https://restcountries.com/v3.1/name/';

async function fetchCountryByName(countryName) {
  const url = `${API}${countryName}?fields=name,capital,population,flags,languages`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

export { fetchCountryByName };
