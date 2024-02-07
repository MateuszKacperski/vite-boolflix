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
    <div v-for="film in store.films" :key="film.result.id">
        <FilmCard />
    </div>
</template>

<style lang="scss" scoped></style>