<template>
    <div class="container">
        <div class="row">
            <div class="md:8 md:offset:2">
                <div class="not-found">
                    <div class="content">
                        <div>
                            <h1>404</h1>
                            <p>It looks like your found a</p>
                            <h2>dead link</h2>
                            <img src="/images/static/dead_link.png" alt="" class="link-image">
                            <p>Nevertheless, you can always <a href="#" onclick="javascript:history.go(-1)" title="go back">go back</a> to where you came from, or go to the <a href="/" title="front page">front page</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>
<style lang="scss" scoped>
@import './assets/sass/variables';

.link-image {
    width: 100%;
    height: auto;
    margin-bottom: 1.5625rem;
}

.not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .content {
        max-width: 300px;
        text-align: center;

        @media (min-width: 992px) {
            max-width: 100%;
        }

        h1 {
            font-size: 8.75rem;
            font-weight: 300;
            color: rgba(0,0,0,.75);
            margin: 0;
            line-height: 1;
        }

        h2 {
            font-size: 4rem;
            font-weight: 400;
            color: $rgba-black;
            margin: 0;
            margin-bottom: 1.5625rem;
            line-height: 1;
            text-transform: uppercase;
        }

        p {
            font-size: 1.125rem;
            margin: 0 0 .625rem;
            color: rgba(0,0,0,.75);

            &:last-of-type {
                margin: 0;
                color: $rgba-black;
            }
        }
    }
}
</style>

