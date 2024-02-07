<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'BoolFlix',
  components: {
    AppHeader,
    AppMain
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
