<template>
    <list-person :persons="persons"></list-person>
</template>
<script>
export default {
    data(){
        return {
            persons: []
        }
    },
    async fetch(){
        this.persons = await this.$content(
            'leadingactor'
        ).fetch()
    }
}
</script>