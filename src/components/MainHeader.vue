<script>
import eventBus from '../services/eventBus';
export default {
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    search() {
      eventBus.$emit('do-search', this.searchText);
    }
  }
}
</script>

<template>
  <header>
    MyFlix
    <input type="text" class="search" placeholder="Search..." v-model="searchText" v-on:keyup.enter="search">
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background: var(--color-background);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.75);
  border-bottom: 2px solid rgba(150, 150, 150, 0.25);
  line-height: 4;
  color: var(--color-logo);
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
  padding: 0 40px;
  position: sticky;
  top: 0;
  z-index: 999;
}

.search {
  background: none;
  color: var(--color-background-mute);
  border: 2px solid var(--color-background-mute);
  outline: none;
  border-radius: 5px;
  height: 30px;
  margin-top: 30px;
  padding: 5px;
}
.search:focus {
  border: 2px solid var(--vt-c-red);
}
</style>
