<template>
    <div class="profile-picture">
        <div class="media">
            <div class="image">
                <img :src="image" alt="Space Cat | Gyuri Kim">
            </div>
            <slot name="name"></slot>
            <slot name="position"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        image: String
    },
    mounted() {
        //
    }
}
</script>
<style lang="scss" scoped>
@import './assets/sass/variables';

.profile-picture {
    padding: .9125rem;
    text-align: center;
    box-shadow: $box-shadow;

    .image {
        width: 100px;
        height: 100px;
        margin: 1px auto 8px auto;

        img {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid $border-color;
        }
    }
}
</style>
