import { Component } from './component.js';
import { series } from '../models/seriesData.js';

export class SeriesCard extends Component {
    template; //aqui hacemos shadowing a la clase padre component.
    constructor(selector) {
        super();
        this.selector = selector
        this.mySeries = series;
        this.template = this.createTemplate();
        this.addRender(this.selector);
    }
    createTemplate() {
    
        
        return `
        <ul class="series-list">
              <li class="serie">
                <img
                  class="series__poster"
                  src= "${this.mySeries.poster}"
                  alt= "${this.mySeries.name + ' poster'}"
                />
                <h4 class="serie__title">${this.mySeries.name}</h4>
                <p class="serie__info">${
                    this.mySeries.creator + ' ' + this.mySeries.year
                }</p>
                <slot class="score"></slot>
             </li>
        <ul/>
        `;
        }
        
   
}
