export default class Ripple {
    constructor(element, e) {
        this.element = element;
        this.ripple = document.createElement('DIV');
        this.ripple.classList.add('ripple');
        this.element.querySelector('.ink-ripple').appendChild(this.ripple);

        this.init(e);
    }

    init(e) {
        var elWidth = this.element.offsetWidth,
            elHeight = this.element.offsetHeight;
        var rippleSize = ((elWidth < elHeight) ? elHeight : elWidth);

        this.ripple.classList.remove('active');

        var boundingBox = this.element.getBoundingClientRect();

        var leftOffset = (e.clientX - boundingBox.left) - rippleSize / 2;
        var topOffset = (e.clientY - boundingBox.top) - rippleSize / 2;

        if (this.element.classList.contains('icon-button')) {
            leftOffset = 0;
            topOffset = 0;
        }

        this.ripple.style.width = rippleSize + 'px';
        this.ripple.style.height = rippleSize + 'px';
        this.ripple.style.left = leftOffset + 'px';
        this.ripple.style.top = topOffset + 'px';
        this.ripple.classList.add('active');

        document.addEventListener('mouseup', () => {
            this.remove();
        });
    }

    /**
     * Remove the ripple
     */
    remove() {
        this.ripple.classList.add('active-out');

        setTimeout(() => {
            this.ripple.remove();
        }, 1000);
    }
}
