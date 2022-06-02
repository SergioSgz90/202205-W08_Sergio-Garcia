import { series } from '../models/seriesData.js';
import { Component } from './component.js';

export class Watched extends Component {
    template; //aqui hacemos shadowing a la clase padre component.
    constructor(selector) {
        super();
        this.selector = selector;
        this.mySeries = series;
        this.template = this.createTemplate();
        this.addRender(this.selector);
    }

    createTemplate() {
        let html = '';

        this.mySeries.forEach((item) => {
            if (item.watched === true) {
                html += `
                    <li class="serie">
                    <img
                        class="serie__poster"
                        src="${item.poster}"
                        alt="${item.name} poster"
                    />
                    <h4 class="serie__title">${item.name}</h4>
                    <p class="serie__info">${item.creator} (${item.year})</p>
                    <ul class="score" data-id="${item.id}">
                  
                    </ul>
                    <i class="fas fa-times-circle icon--delete"></i>
                </li>
                `;
            }
        });
        return `
        <section class="series-watched">
                 <h3 class="subsection-title">Watched series</h3>
                  ${this.messageWatchedSeries()}
                 <ul class="series-list series-list--watched">
                    ${html}
                </ul>
        </section>`;
    }

    numberWatchedSeries() {
        let numberSeries = 0;

        this.mySeries.forEach((item) => {
            item.watched === true && numberSeries++;
        });
        return numberSeries;
    }
    messageWatchedSeries() {
        const watchedNum = this.numberWatchedSeries()
        if (watchedNum === 0) {
               return `<p class="info">You have not watched any serie</p>`
        } else {
            return `
                <p class="info">You have watched ${this.numberWatchedSeries()} series</p>
            
            `;
        }
    }
}
