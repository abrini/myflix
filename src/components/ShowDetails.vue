<script>
export default {
  props: ['show'],
  setup(props) {
    console.log(props.show)
  },
  methods: {
    viewShowDetails(showId) {
      this.$router.push(`/show/${ showId }`);
    }
  }
}
</script>

<template>
  <div class="show-details" v-if="show">
    <img class="show-image" data-testid="show-has-image" :src="show?.image?.medium" v-if="show?.image?.medium" />
    <img class="show-image" data-testid="show-has-no-image" src="@/assets/no_image_available.png" v-else />
    <div class="show-info">
      <h1 class="show-title" data-testid="show-title">{{ show.name }} — {{ show.premiered }}</h1>
      <p>
        <span class="label">Language: </span>
        <span data-testid="language">{{ show.language }}</span>
      </p>
      <p v-if="show.genres.length > 0">
        <span class="label">Genre: </span>
        <span data-testid="genre">{{ show.genres.toString() }}</span>
      </p>
      <p>
        <span class="label">Type: </span>
        <span data-testid="type">{{ show.type }}</span>
      </p>
      <p>
        <span class="label">Summary: </span>
        <span v-html="show.summary"></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.show-details {
  display: flex;
  margin-top: 20px;
}

.show-info {
  padding-left: 20px;
}

.show-title {
  border-bottom: 1px solid var(--vt-c-dark-2);
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
}

.show-image {
  height: 295px;
  width: 210px;
  border: 5px solid var(--vt-c-white-mute);
}

@media screen and (max-width: 480px) {
  .show-details {
    flex-wrap: wrap;
  }
  
  .show-info{ 
    padding-left: 0;
  }

}
</style>
