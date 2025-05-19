import { updateStatuses } from './sitefetch.js';
import { fetchNWSWeather } from './nwsfetch.js';

updateStatuses();
setInterval(updateStatuses, 60000);
fetchNWSWeather();
