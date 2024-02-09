<script>
export default {
    name: 'AppSerchbar',
    data: () => ({
        serchFilm: ''
    }),
    emits: ['serch-film'],
    /* methods: {
         sendResult() {
             this.$emit('serch-film', this.serchFilm)
         }
     }*/
}
</script>

<template>
    <div class="align-self-center">
        <input @keyup.enter="$emit('serch-film', serchFilm)" type="text" placeholder="Write the title"
            v-model.trim="serchFilm">
        <button type="button" @click="$emit('serch-film', serchFilm)">Serch</button>
    </div>
</template>

<style lang="scss" scoped>
input {
    max-width: 150px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px 10px;
}

button {
    background-color: white;
    border: none;
    padding: 5px 10px;
    border-left: 1px solid black;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>