<script>
import ShowCard from './ShowCard.vue';
import { getShows, searchShows } from '../services/tvMazeManager';
import eventBus from '../services/eventBus';
export default {
  components: {
    'show-card': ShowCard,
  },
  data() {
    return {
      shows: null
    }
  },
  methods: {
    async search(searchText) {
      this.shows = await searchShows(searchText);
    }
  },
  async mounted() {
    this.shows = await getShows();
    eventBus.$on('do-search', (searchText) => this.search(searchText));
  }
}
</script>

<template>
  <h1>New Shows</h1>
  <ul class="shows-list">
    <li class="shows-list-item" v-for="show in shows" :key="show.show.id" data-test="show">
      <show-card :show="show.show" />
    </li>
  </ul>
</template>

<style scoped>
h1 {
  padding: 10px 40px;
}

.shows-list {
  list-style: none;
  padding: 0 40px;
}

.shows-list-item {
  display: inline-block;
  margin-right: 40px;
  margin-bottom: 40px;
}
</style>
