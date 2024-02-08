<script>
import { store } from '../data/store.js';
import ProductionCard from './ProductionCard.vue';
export default {
    name: 'ListFilms',
    data: () => ({
        store
    }),
    components: {
        ProductionCard
    }
}
</script>

<template>
    <ProductionCard v-for="film in store.films" :key="film.id" :production="film" />
    <h1>serie</h1>
    <ProductionCard v-for="serie in store.series" :key="serie.id" :production="serie" />
</template>

<style lang="scss" scoped></style>