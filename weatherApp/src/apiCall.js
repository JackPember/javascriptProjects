import { buildCurrentStr, buildForecastStr } from './buildApiStr';

export async function currentWeatherApiCall() {
  const str = buildCurrentStr();
  try {
    const response = await fetch(str, { mode: 'cors' });
    const currentWeatherData = await response.json();
    if (Object.hasOwn(currentWeatherData, 'error') && currentWeatherData.error.code === 1006) {
      const output = document.getElementById('output');
      output.textContent = `Error: ${currentWeatherData.error.message} Please enter a different location.`;
    }
    return currentWeatherData;
  } catch (err) {
    console.error(err);
    return new Error('invalid location');
  }
}

export async function forecastWeatherApiCall() {
  const str = buildForecastStr();
  try {
    const response = await fetch(str, { mode: 'cors' });
    const forecastWeatherData = await response.json();
    if (Object.hasOwn(forecastWeatherData, 'error') && forecastWeatherData.error.code === 1006) {
      const output = document.getElementById('output');
      output.textContent = `Error: ${forecastWeatherData.error.message} Please enter a different location.`;
    }
    return forecastWeatherData;
  } catch (err) {
    console.error(err);
    return new Error('invalid location');
  }
}
