<template>
  <div class="audiobook">
    <img :src="item.artworkUrl100">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Artist: {{item.artistName}} | Album: {{item.collectionName}}</p>
  </div>
</template>

<script>
import { Audiobook } from "@/models/LibraryItems";

export default {
  name: "AudiobookDetails",
  props: {item: Audiobook},
}
</script>

<style scoped>

</style>
