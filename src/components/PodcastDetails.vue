<template>
  <div class="podcast">
    <img :src="item.artworkUrl100">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Podcaster: {{item.artistName}}</p>
  </div>
</template>

<script>
import { Podcast } from "@/models/LibraryItems";

export default {
  name: "PodcastDetails",
  props: {item: Podcast},
}
</script>

<style scoped>

</style>
