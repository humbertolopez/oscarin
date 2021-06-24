<template>
    <div v-if="persons">
        <h2 class="text-5xl font-playfair text-gold my-8">{{persons.category}}</h2>
        <ul>
            <li v-for="person in persons.items">{{person.name}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: [
            'persons'
        ]
    }
</script>