<template>
  <div class="featureMovie">
    <img :src="item.artworkUrl100">
    <h3 class="card-title">{{item.title}} <h5>Director: {{item.artistName}}</h5></h3>
    <p class="card-text">Description: {{item.description}}</p>
  </div>
</template>

<script>
import { FeatureMovie } from "@/models/LibraryItems";

export default {
  name: "FeatureMovieDetails",
  props: {item: FeatureMovie},
}
</script>

<style scoped>

</style>
