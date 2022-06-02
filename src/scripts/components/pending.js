import { Component } from './component.js';
import { series } from "../models/seriesData.js"

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
    let html = ""
    this.mySeries.forEach((item)=>{
        if (item.watched === false) {
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
    })
    return `<section class="series-pending">
           <h3 class="subsection-title">Pending series</h3>
            ${this.messagePendingSeries()}
           <ul class="series-list">
           ${html}
             </section>`;

    }

    countPendingSeries(){
        let numPending = 0
        this.mySeries.forEach((item)=> {
       item.watched === false && numPending++;
        })
        return numPending
    }

    messagePendingSeries() {
        const numberPending = this.countPendingSeries()
        console.log(numberPending);
        if (numberPending === 0) {
            return `<p class="info">Congrats! You've watched all your series</p>`;
  
        } else {
        return `
          <p class="info">You have ${this.countPendingSeries()} series pending to watch</p>`;
            
        }
        
    }

}

