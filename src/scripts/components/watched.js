import { series } from '../models/seriesData.js';
import { Component } from './component.js';

export class Watched extends Component {
    template; //aqui hacemos shadowing a la clase padre component.
    constructor(selector) {
        
        super();
        this.selector = selector
        this.mySeries = series 
        this.template = this.createTemplate();
        this.addRender(this.selector);
    }

   


    createTemplate() {

         const arrayWatched = series.filter(filterWatched);
         const watchedSeries = arrayWatched.length

         function filterWatched(serie) {
             return  serie.watched === true
         }

        if (watchedSeries === 0) {
          
            return `<section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You already have not watched any serie</p>
            </section>`;

        }
        else 
        return `<section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched ${watchedSeries} series</p>
            </section>`;
    }


}
