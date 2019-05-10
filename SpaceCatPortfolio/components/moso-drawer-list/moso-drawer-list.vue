<template>
    <div class="drawer-list">
        <ul id="drawerMenu">
            <slot></slot>
        </ul>
    </div>
</template>
<script>
export default {
    mounted() {
        //
    },
}
</script>
<style lang="scss">
@import './assets/sass/variables';

.drawer-list {
    margin-top: 20px;

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
}
</style>
