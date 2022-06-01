import { Component } from './component.js';

export class sample extends Component {
    template; //aqui hacemos shadowing a la clase padre component.
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.render(this.selector);
    }
    createTemplate() {
        return ``;
    }
}
