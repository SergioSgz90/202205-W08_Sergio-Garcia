import { Header } from './components/header.js';
import { Pending } from './components/pending.js';
import { Series } from './components/series.js';
import { Watched } from './components/watched.js';

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
function app() {
    console.log('DOM Loaded');
    new Header('slot.main-header');
    new Series('slot.series');
    new Pending('slot.series-pending');
    new Watched('slot.series-watched');

}
