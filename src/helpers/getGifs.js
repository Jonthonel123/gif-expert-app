export const getGifs = async (categorie) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=DRZZcQY4oTSRGea7UgRVnkw4utS0mI9N&q=${categorie}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  // console.log(data);

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs;
};
