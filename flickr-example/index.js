const API_KEY = '2af54aca22ccb9c902078adc64b47907';
const BASE_URL = 'https://api.flickr.com/services/rest';
const METHOD = '?method=flickr.photos.search';

async function getPhotos() {
    const URL = `${BASE_URL}${METHOD}&api_key=${API_KEY}&text=cat&format=json&nojsoncallback=1`;
    const response = await fetch(URL); // Fetch utgår från att det är ett GET-anrop om inget anges
    const data = await response.json();
    console.log(data);

    const photo = data.photos.photo[0];

    const photoURLThumbnail = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
    console.log(photoURLThumbnail);
    const photoURLLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
    console.log(photoURLLarge);
}

