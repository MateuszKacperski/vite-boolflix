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
    <h1>BoolFlix</h1>
    <AppSerchbar @serch-film="$emit('serch', $code)" />
</template>

<style lang="scss" scoped></style>