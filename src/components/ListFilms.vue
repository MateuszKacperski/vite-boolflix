<script>
import { store } from '../data/store.js';
import FilmCard from './FilmCard.vue';
export default {
    name: 'ListFilms',
    data: () => ({
        store
    }),
    components: {
        FilmCard
    }
}
</script>

<template>
    <div v-for="film in store.films" :key="film.id">
        <FilmCard :titolo="film.title" :titoloOriginale="film.original_title" :lingua="film.original_language"
            :voto="film.vote_average" />
    </div>
</template>

<style lang="scss" scoped></style>