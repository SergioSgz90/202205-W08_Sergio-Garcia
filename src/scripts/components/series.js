import { Component } from './component.js';
import {  } from './pending.js';


export class Series extends Component {
    template; //aqui hacemos shadowing a la clase padre component.
    constructor(selector) {
        super();
        this.selector = selector
        this.template = this.createTemplate();
        this.addRender(this.selector);

       
    }
    createTemplate() {
        return `<section class="series">
          <h2 class="section-title">Series list</h2>
            <slot class ="series-watched"><slot/>
            <slot class ="series-pending"><slot/>
            </section>`;
    }
}
