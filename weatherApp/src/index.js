import pageLoad from './pageLoad';
import { displayCurrentWeatherDataImperial } from './displayResponse';
import './style.css';

pageLoad();

const submitBtn = document.getElementById('getData');
submitBtn.addEventListener('click', displayCurrentWeatherDataImperial);
