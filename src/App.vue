<script>
import axios from 'axios';
const endpoint = 'https://api.themoviedb.org/3/search/movie?query=witcher&api_key=16517ebfb9792a1146d392bafdbe760b'
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'BoolFlix',
  data: () => ({
    film: []
  }),
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    serchedResults() {
      axios.get(endpoint).then(res => {
        this.film = res.data.results
      })
    },
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped>
@use './assets/scss/style.scss';
</style>
