export async function fetchNWSWeather() {
  const lat = 42.0884;
  const lon = -87.9806;

  try {
    const pointsResponse = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
    if (!pointsResponse.ok) throw new Error('Gridpoint lookup failed');
    const pointsData = await pointsResponse.json();
    const forecastUrl = pointsData.properties.forecast;

    const forecastResponse = await fetch(forecastUrl);
    if (!forecastResponse.ok) throw new Error('Forecast fetch failed');
    const forecastData = await forecastResponse.json();

    const periods = forecastData.properties.periods;
    if (periods?.length >= 2) {
      const high = periods[0];
      const low = periods[1];

      document.getElementById('temp-high').textContent = `High: ${high.temperature}°${high.temperatureUnit}`;
      document.getElementById('temp-low').textContent = `Low: ${low.temperature}°${low.temperatureUnit}`;
      document.getElementById('conditions').textContent = `Conditions: ${high.shortForecast}`;
      document.getElementById('wind').textContent = `Wind Speed: ${high.windSpeed}`;
    }
  } catch (error) {
    console.error(error);
    document.getElementById('conditions').textContent = 'Conditions: Unable to fetch data';
  }
}
