<script>
import AppSerchbar from './AppSerchbar.vue';
export default {
    name: 'AppHeder',
    components: {
        AppSerchbar
    },
    emits: ['serch']
}
</script>

<template>
    <header class="d-flex">
        <div class="container d-flex justify-content-between">
            <h1 class="align-self-center"><strong>BoolFlix</strong></h1>
            <AppSerchbar @serch-film="$emit('serch', $event)" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    min-height: 100px;
}

h1 {
    font-size: 50px;
    color: red;
    margin: 0;
}
</style>