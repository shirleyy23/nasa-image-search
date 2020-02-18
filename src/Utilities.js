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
