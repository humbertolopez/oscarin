<template>
    <div v-if="films" :id="films.id" class="film-list">
        <h2 class="text-5xl font-playfair text-gold my-8">{{films.name}}</h2>
        <div class="grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8">
            <div v-for="film in films.items" class="text-center film-list-item hover:bg-gold-light p-1 xl:p-2">
                <div class="film-poster">
                    <img :src="'https://image.tmdb.org/t/p/w300/'+film.poster_path">
                </div>
                <h3 class="my-2 px-2 md:px-4 text-sm font-bold">{{film.original_title}}</h3>
            </div>
        </div>
    </div>    
</template>
<script>
    export default {
        props: [
            'films'
        ]
    }
</script>