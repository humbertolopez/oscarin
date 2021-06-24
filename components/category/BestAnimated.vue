<template>
    <list-film :films="films"></list-film>
</template>
<script>
export default {
    data(){
        return {
            films: []
        }
    },
    async fetch(){
        this.films = await fetch(
            'https://api.themoviedb.org/3/list/36185?api_key=1cfc7ecad1f5899f87c96cb7ab200292&language=en-US'
        ).then(res=>res.json())
    }
}
</script>