import { Component } from './component.js';

export class Header extends Component {
    template; //aqui hacemos shadowing a la clase padre component.
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.outRender(this.selector);
    }
    createTemplate() {
        return ` <header class="main-header">
                <h1 class="main-title">My Series</h1>
            </header>`;
    }
}
