<template>
    <div class="ink-ripple"></div>
</template>

<script>
import Ripple from '~/plugins/RippleClass.js';

export default {
    data() {
        return {
            element: null,
        }
    },
    methods: {
        init() {
            this.element.classList.add('has-ripple');
        },

        create(e) {
            this.ripples.push(
                new Ripple(this.element, e)
            );
        }
    },
    mounted() {
        this.element = this.$el.parentElement;
        this.ripples = [];

        if (this.element.classList.contains('disabled')) return;

        this.init();

        this.element.addEventListener('mousedown', e => {
            this.create(e);
        });
    }
}
</script>
