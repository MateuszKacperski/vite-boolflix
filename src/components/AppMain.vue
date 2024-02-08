<script>
import ProductionList from './ProductionList.vue';
export default {
    name: 'AppMain',
    components: {
        ProductionList
    }
}
</script>

<template>
    <main>
        <div class="container">
            <ProductionList />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: black;
    color: white;
}
</style>