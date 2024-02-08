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
    <section id="films-list">
        <h1>Films</h1>
        <div class="row g-3 row-col-3">
            <ProductionCard v-for="film in store.films" :key="film.id" :production="film" />
        </div>
    </section>
    <section id="series-list">
        <h1>Series</h1>
        <div class="row g-3 row-col-3">
            <ProductionCard v-for="serie in store.series" :key="serie.id" :production="serie" />
        </div>
    </section>
</template>

<style lang="scss" scoped></style> 