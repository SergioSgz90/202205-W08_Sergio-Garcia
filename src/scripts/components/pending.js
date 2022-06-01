import { Component } from './component.js';
import { series } from "../models/seriesData.js"
import { Watched } from './watched.js';

export class Pending extends Component {
    template; //aqui hacemos shadowing a la clase padre component.
    constructor(selector) {
        
        super();
        this.selector = selector
        this.mySeries = series
        this.template = this.createTemplate();
        this.outRender(this.selector);
    }
    createTemplate() {
        const arrayPending = this.mySeries.filter(filterPending)
        const pending = arrayPending.length

        function filterPending(serie) {
            return serie.watched === false;
        }
      
        if (pending === 0) {

        return `<section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">Congrats! You've watched all your series</p>
            </section>`;
    }
    
    else return `<section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have ${pending} series pending to watch</p>
            </section>`;

    }

}
