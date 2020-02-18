// API Utilities

export async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (rejectedValue) {
    console.log(`ERROR: ${rejectedValue}`);
  }
}

// Needed when API returns a featured video instead of an image in the API
export function getVideoID(str) {
  const videoID = str.split('/embed/')[1].split('?')[0];
  return `http://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
}

// Demo API
export const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
