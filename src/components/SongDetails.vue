<template>
  <div class="song">
    <img :src="item.artworkUrl100">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Artist: {{item.artistName}} | Album: {{item.collectionName}}</p>
  </div>
</template>

<script>
import { Song } from "@/models/LibraryItems";

export default {
  name: "SongDetails",
  props: {item: Song},
}
</script>

<style scoped>

</style>
