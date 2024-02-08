<script>
import axios from 'axios';
import { store } from './data/store.js';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'BoolFlix',
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    serchedResults(serchFilm) {
      if (!serchFilm) {
        store.films = []
        store.series = []
      }
      const endpointFilm = `https://api.themoviedb.org/3/search/movie?query=${serchFilm}&api_key=16517ebfb9792a1146d392bafdbe760b`
      const endpointTv = `https://api.themoviedb.org/3/search/tv?api_key=16517ebfb9792a1146d392bafdbe760b&query=${serchFilm}`
      axios.get(endpointFilm).then(res => {
        store.films = res.data.results
      }),
        axios.get(endpointTv).then(res => {
          store.series = res.data.results
        })
    }
  }
}
</script>

<template>
  <font-awesome-icon icon="fa-solid fa-star" style="color: #FFD43B;" />
  <font-awesome-icon icon="fa-solid fa-star" style="color: black;" />
  <AppHeader @serch="serchedResults" />
  <AppMain />
</template>

<style lang="scss" scoped>
@use './assets/scss/style.scss';
</style>
