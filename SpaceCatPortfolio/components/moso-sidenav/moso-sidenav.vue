<template>
    <div>
        <div class="sidenav" :class="classes" @keyup.esc="close">
            <div class="sidenav-content">
                <slot></slot>
            </div>
        </div>
        <transition name="sidenav-backdrop">
            <div class="sidenav-backdrop" v-if="sidenavShow" @click="close();"></div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sidenavShow: false
        }
    },
    props: {
        sidenavSwipe: Boolean,
        sidenavSwipeThreshold: {
            type: Number,
            default: 15
        },
        sidenavSwipeDistance: {
            type: Number,
            default: 100
        }
    },
    computed: {
        classes() {
            return this.sidenavShow && 'sidenav-open';
        }
    },
    methods: {
        show() {
            this.open();
        },
        open() {
            document.querySelector('body').classList.add('open-sidenav');
            this.sidenavShow = true;
            this.$el.focus();
            this.$emit('open');
        },
        close() {
            document.querySelector('body').classList.remove('open-sidenav');
            this.sidenavShow = false;
            this.$el.blur();
            this.$emit('close');
        },
        toggle() {
            if (this.sidenavShow) {
                this.close();
            } else {
                this.open();
            }
        },
        isHorizontallyInside(positionX) {
            return positionX > 0 && positionX < this.mountedRect.left + this.mountedRect.width;
        },
        isVerticallyInside(positionY) {
            return positionY > 0 && positionY < this.mountedRect.top + this.mountedRect.height;
        },
        isFromStartWhenClosed(positionX) {
            if (this.sidenavShow) {
                return true;
            }
            return positionX < this.sidenavSwipeThreshold;
        }
    },
    mounted() {
        if (!this.sidenavSwipe) {
            return;
        }
    },
    beforeDestroy() {
        if (!this.sidenavSwipe) {
            return;
        }
    }
}
</script>
<style lang="scss" scoped>
@import './assets/sass/variables';

.sidenav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $sidenav-width;
    background-color: $dark-blue-gray;
    box-shadow: $box-shadow;
    transform: translate3d(-105%,0,0);
    transition: all 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
    z-index: 4;

    @media (min-width: 992px) {
        transform: translate3d(0,0,0);
    }

    &.sidenav-open {
        transform: translate3d(0,0,0);
    }
}

.sidenav-backdrop {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 3;
    background-color: rgba(0,0,0,.20);
    transition: background-color 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
}
.sidenav-backdrop-enter-active {
    background-color: rgba(0,0,0,.20);
}
.sidenav-backdrop-enter, .sidenav-backdrop-leave-to {
    background-color: transparent;
}
</style>
