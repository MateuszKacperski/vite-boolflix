<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const noImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'

export default {
    name: 'FilmCard',
    props: {
        production: Object
    },
    computed: {
        title() {
            return this.production.title || this.production.name;
        },
        originalTitle() {
            return this.production.original_title || this.production.original_name;
        },
        hasFlag() {
            const flag = ['it', 'en'];
            return flag.includes(this.production.original_language);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.production.original_language}.png`, import.meta.url);
            return url.href;
        },
        image() {
            const endpointImg = `https://image.tmdb.org/t/p/w342${this.production.poster_path}`;
            if (endpointImg == this.production.poster_path) {
                return noImage;
            }
            return endpointImg;
        },
        vote() {
            return Math.ceil(this.production.vote_average / 2);
        }
    },
    components: { FontAwesomeIcon }
}
</script>

<template>
    <div class="col">
        <div class="production-img" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
        <ul class="cover show">
            <li><strong>Titolo:</strong> {{ title }}</li>
            <li><strong>Titolo originale:</strong>{{ originalTitle }}</li>
            <li>
                <img v-if="hasFlag" :src="flagSrc" :alt="production.original_language" class="img-fluid img-flag">
                <span v-else>{{ production.original_language }}</span>
            </li>
            <li><strong>Voto:</strong>
                <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[n <= vote ? 'fas' : 'far', 'star']" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    color: white;
    background-color: black;

    li {
        padding-top: 10px;
        margin: 10px 0;
        font-size: 20px;

        .img-flag {
            max-height: 30px;
        }
    }
}

.production-img {
    height: 500px;
    width: 300px;
}

.production-img:hover {
    display: none;
}

.production-img:hover+.cover {
    display: block;
    border: 2px solid white;
}

.cover {
    display: none;
    height: 500px;
    width: 300px;
    margin: 0;
}
</style>