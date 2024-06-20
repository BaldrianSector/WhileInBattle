<script setup>
import BlockSection from './components/BlockSection.vue'
</script>

<template>
  <BlockSection id="hero" class="bg-[#161718]" msg="Hero Section" />
  <BlockSection id="s1" class="bg-[#807164]" msg="Image 1 Section" />
  <BlockSection id="s1" class="bg-[#57575F]" msg="Image 2 Section" />
  <BlockSection id="s1" class="bg-[#AA7246]" msg="Quote Section" />
  <BlockSection id="s1" class="bg-[#4D5C93]" msg="Map Section" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
