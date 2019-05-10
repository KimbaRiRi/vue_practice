import Ripple from '~/plugins/RippleClass.js';

export default {
    inserted(el) {
        new RippleContainer(el);
    }
}

class RippleContainer {
    constructor(element) {
        this.element = element;
        this.ripples = [];

        if (this.element.classList.contains('disabled')) return;

        this.init();

        this.element.addEventListener('mousedown', e => {
            this.create(e);
        });
    }

    init() {
        this.element.innerHTML += '<div class="ink-ripple"></div>';
        this.element.classList.add('has-ripple');
    }

    create(e) {
        this.ripples.push(
            new Ripple(this.element, e)
        );
    }
}
