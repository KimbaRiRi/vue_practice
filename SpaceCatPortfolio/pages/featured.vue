<template>
   <div>Test</div>
</template>
<script>

import axios from 'axios'

export default {
    layout: 'default',
    components: {
        
    },
    data() {
        return {
            title: 'Featured Projects',
            experiences: [],
            educations: []
        }
    },
    head() {
        return {
            title: 'Space Cat | ' + this.title
        }
    },
    computed: {
    },
    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.title)
    }
}
</script>
