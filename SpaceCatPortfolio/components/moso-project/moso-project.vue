<template>
    <div class="project">
        <div class="project-header">
            <div class="project-image" v-if="image">
                <img :src="image" alt="">
            </div>
            <div class="project-title" v-if="projectTitle">
                <h4>{{ projectTitle }}</h4>
                <small class="project-subtitle" v-if="subTitle">{{ subTitle }}</small>
            </div>
            <div class="project-link" v-if="link || subTitle">
                <a v-if="link" :href="link" :title="link" target="_blank" rel="noopener" v-html="icon"></a>
            </div>
        </div>
        <div class="project-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        image: {
            type: String
        },
        projectTitle: {
            type: String
        },
        subTitle: {
            type: String
        },
        link: {
            type: String
        },
        icon: {
            type: String
        }
    },
    filters: {
        stripHTTP: function(value) {
            value = value.toString();
            if (value.match(/https?:\/\//)) {
                return value.replace(/https?:\/\//, '');
            }
        }
    },
    mounted() {
        //
    }
}
</script>
<style lang="scss" scoped>
@import './assets/sass/variables';

.project {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    //padding: 1rem;
    border-radius: $border-radius;
    font-weight: 400;
    color: $rgba-black;
    box-shadow: $box-shadow;
    overflow: hidden;
    z-index: 1;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255,255,255,0);

    .project-header {
        position: relative;
        display: flex;
        padding: 1rem 0 0 1rem;

        .project-image {
            display: flex;
            width: 40px;
            margin-right: .3125rem;

            @media (min-width: 992px) {
                width: 50px;
                margin-right: .625rem;
            }

            img {
                width: 40px;
                height: 40px;
                border: 2px solid $border-color;
                border-radius: 50%;

                @media (min-width: 992px) {
                    width: 50px;
                    height: 50px;
                }
            }
        }

        .project-title {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h4 {
                margin: 0 0 .3125rem;
                font-size: 1.125rem;
                font-weight: 600;
                color: $rgba-black;
                line-height: 1;

                @media (min-width: 992px) {
                    font-size: 1.3rem;
                }
            }

            .project-subtitle {
                font-size: .8125rem;
                color: rgba(0,0,0,.54);
            }
        }

        .project-link {
            position: absolute;
            top: .5rem;
            right: .5rem;

            @media (min-width: 992px) {
                top: .8125rem;
                right: .8125rem;
                margin-left: auto;
            }
        }
    }

    .project-body {
        margin-top: 1rem;
        padding: 1rem;
        border-top: 1px solid #ddd;
    }

    &.single {
        padding: 1rem;

        .project-header {
            padding: 0;
        }

        .project-body {
            display: none;
        }
    }
}
</style>
<style lang="scss">
.project-body {
    p {
        margin: 0 0 1rem;
        color: rgba(0,0,0,.65);

        &:last-of-type {
            margin: 0;
        }
    }
}

.project-link {
    svg {
        width: 1.25rem;
        height: 1.25rem;
        fill: #000;
        opacity: 0.54;
        transition: opacity .2s ease-in-out;

        &:hover,
        &:focus,
        &:active,
        &:hover:active {
            fill: #000;
            opacity: 0.87;
        }
    }
}
</style>

