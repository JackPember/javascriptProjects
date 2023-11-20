import getLocation from './getLocation';

export const buildCurrentStr = () => {
    const API_KEY = 'nice try!';
    const location = getLocation();
    console.log(location);
    return `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;
}

export const buildForecastStr = () => {
    const API_KEY = 'nice try!';
    const location = getLocation();
    console.log(location);
    return `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`;
}