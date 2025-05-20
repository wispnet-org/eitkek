import { updateStatuses } from './sitefetch.js';
import { fetchNWSWeather } from './nwsfetch.js';
import { loadVerseOfTheDay } from './versefetch.js';

updateStatuses();
setInterval(updateStatuses, 60000);
fetchNWSWeather();
loadVerseOfTheDay(); 