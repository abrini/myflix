<script>
import ShowDetails from '../components/ShowDetails.vue';
import { getShow } from '../services/tvMazeManager';
export default {
  components: {
    'show-details': ShowDetails,
  },
  data() {
    return {
      show: null
    }
  },
  async mounted() {
    this.show = await getShow(this.$route.params.id);
  }
}
</script>

<template>
  <div class="show-view">
    <router-link to="/">Back to Home</router-link>
    <show-details :show="show" />
  </div>
</template>

<style scoped>
.show-view {
  padding: 20px 40px;
}

a {
  color: var(--vt-c-black);
  background: var(--vt-c-white-mute);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 20px;
  transition: background 0.3s;
}
a:hover {
  color: var(--vt-c-white-mute);
  background: var(--vt-c-red);
}

</style>
