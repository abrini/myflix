<script>
export default {
  props: ['show'],
  methods: {
    viewShowDetails(showId) {
      this.$router.push(`/show/${ showId }`);
    },
  }
}
</script>

<template>
  <div class="show-card" v-if="show" @click="viewShowDetails(show.id)">
    <div class="show-title">{{ show.name }}</div>
    <img class="show-image" :src="show.image?.medium" v-if="show.image?.medium" />
    <img class="show-image" src="@/assets/no_image_available.png" v-else />
  </div>
</template>

<style scoped>
.show-card {
  background: #e9e9e9;
  position: relative;
  width: 220px;
  height: 305px;
  border: 5px solid var(--vt-c-white-mute);
  transition: border 0.5s;
  cursor: pointer;
}
.show-card:hover {
  border: 5px solid var(--vt-c-red);
}

.show-title {
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 5px;
  font-weight: bold;
}

.show-image {
  height: 295px;
  width: 210px;
}

</style>
