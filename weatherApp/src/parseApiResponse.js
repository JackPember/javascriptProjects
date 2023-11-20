import { currentWeatherApiCall, forecastWeatherApiCall } from './apiCall';

export const parseCurrentWeatherData = async () => {
  try {
    const data = await currentWeatherApiCall();

    const { location } = data;
    const { current } = data;
    const { condition } = data.current;

    const weatherData = {
      name: '',
      region: '',
      country: '',
      lat: '',
      lon: '',
      tz_id: '',
      localtime: '',
      temp_c: '',
      temp_f: '',
      is_day: '',
      text: '',
      icon: '',
      wind_mph: '',
      wind_kph: '',
      wind_degree: '',
      wind_dir: '',
      pressure_mb: '',
      pressure_in: '',
      precip_mm: '',
      precip_in: '',
      humidity: '',
      feelslike_c: '',
      feelslike_f: '',
      vis_km: '',
      vis_miles: '',
      uv: '',
      gust_mph: '',
      gust_kph: '',
    };

    const locKeys = Object.keys(location);
    const currentKeys = Object.keys(current);
    const condKeys = Object.keys(condition);

    locKeys.forEach((key) => {
      if (Object.hasOwn(weatherData, key)) {
        weatherData[key] = location[key];
      }
    });

    currentKeys.forEach((key) => {
      if (Object.hasOwn(weatherData, key)) {
        weatherData[key] = current[key];
      }
    });

    condKeys.forEach((key) => {
      if (Object.hasOwn(weatherData, key)) {
        weatherData[key] = condition[key];
      }
    });
    return weatherData;
  } catch (error) {
    return new Error('invalid location');
  }
};

export const parseForecastWeatherData = async () => {
  try {
    const data = await forecastWeatherApiCall();

    const zero = data.forecast.forecastday[0];
    const one = data.forecast.forecastday[1];
    const two = data.forecast.forecastday[2];

    const forecastDataDayZero = {
      date: zero.date,
      icon: zero.day.condition.icon,
      text: zero.day.condition.text,

    };

    const forecastDataDayOne = {
      date: one.date,
      icon: one.day.condition.icon,
      text: one.day.condition.text,

    };

    const forecastDataDayTwo = {
      date: two.date,
      icon: two.day.condition.icon,
      text: two.day.condition.text,

    };

    const day0Keys = Object.keys(zero.day);
    const astro0Keys = Object.keys(zero.astro);

    const day1Keys = Object.keys(one.day);
    const astro1Keys = Object.keys(one.astro);

    const day2Keys = Object.keys(two.day);
    const astro2Keys = Object.keys(two.astro);

    day0Keys.forEach((key) => {
      forecastDataDayZero[key] = zero.day[key];
    });

    astro0Keys.forEach((key) => {
      forecastDataDayZero[key] = zero.astro[key];
    });

    day1Keys.forEach((key) => {
      forecastDataDayOne[key] = one.day[key];
    });

    astro1Keys.forEach((key) => {
      forecastDataDayOne[key] = one.astro[key];
    });

    day2Keys.forEach((key) => {
      forecastDataDayTwo[key] = two.day[key];
    });

    astro2Keys.forEach((key) => {
      forecastDataDayTwo[key] = two.astro[key];
    });
    return [forecastDataDayZero, forecastDataDayOne, forecastDataDayTwo];
  } catch (error) {
    return new Error('invalid location');
  }
};
