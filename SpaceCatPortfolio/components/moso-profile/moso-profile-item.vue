<template>
    <li>
        <a :href="link" class="button icon-button" :class="linkClass" tabindex="-1" :title="title" target="_blank" rel="noopener">
            <img :src="svg" alt="" v-if="svg">
            <i class="mdi" :class="icon" v-if="icon"></i>
            <nano-ripple />
        </a>
    </li>
</template>
<script>
import NanoRipple from '~/components/nano-ripple/nano-ripple.vue'

export default {
    components: {
        NanoRipple
    },
    props: {
        link: {
            type: String
        },
        linkClass: {
            type: String
        },
        icon: {
            type: String
        },
        svg: {
            type: String
        },
        title: {
            type: String
        }
    },
    mounted() {
        //
    }
}
</script>
<style lang="scss" scoped>
@import './assets/sass/variables';

li {
    height: 40px;
    width: 40px;

    a {
        text-decoration: none;
        text-align: center;
        border-radius: 50%;

        &:hover,
        &:focus,
        &:active,
        &:visited,
        &:hover:active {
            text-decoration: none;
            outline: 0;
        }

        &.github,
        &.codepen {
            color: #000;
        }

        &.facebook {
            color: $facebook;
        }

        &.twitter {
            color: $twitter;
        }

        &.linkedin {
            color: $linkedin;
        }

        &.mastodon img {
            height: 18px;
        }

        &.gitlab img {
            height: 22px;
        }

        i.mdi {
            display: block;
            line-height: 22px;
        }
    }
}
</style>
