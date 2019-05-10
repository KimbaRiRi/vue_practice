<template>
    <div class="progressbar-container">
        <div class="progressbar-values">
            <span>{{ name }}</span>
            <span>{{ percentage }}%</span>
        </div>
        <div class="progressbar">
            <span class="progress" :style="'width: ' + percentage + '%'"></span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String
        },
        percentage: {
            type: Number
        }
    },
    mounted() {
        //
    }
}
</script>
<style lang="scss" scoped>
.progressbar-container {
    .progressbar-values {
        display: flex;
        justify-content: flex-start;
        padding-bottom: .25rem;

        span:last-of-type {
            margin-left: auto;
        }
    }
}

.progressbar {
    position: relative;
    width: 100%;
    height: 6px;
    background-color: rgba(158,158,158,.3);
    border-radius: 8px;

    .progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: rgba(38,50,56,.9);
        border-radius: 8px;
        transition: 2s all;
        animation-duration: 2s;
        animation-name: animationProgress;
    }
}

@keyframes animationProgress {
    from {
        width: 0;
    }
}
</style>
