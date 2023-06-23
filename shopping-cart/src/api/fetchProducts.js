export default async function fetchProducts(search) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${search}`
  );
  const data = await response.json();

  return data.results;
}
