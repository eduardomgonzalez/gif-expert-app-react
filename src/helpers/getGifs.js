// Regresa una promesa que resuelve la coleccion de mis imagenes

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=pegfuTgq5UgvJSYuKxdLKz136xFSd0UA`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url, // Si vienen las imagenes entonces lo utilice
  }));

  return gifs;
};
