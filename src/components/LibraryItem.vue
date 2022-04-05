<template>
  <div class="card" :class="{'border-success': item.isAvailable(), 'border-warning': item.status === 'in-bag'}">
    <div class="card-body">
      <component :is="typeOfItem" :item="item"></component>
    </div>
    <div class="card-footer">
      <!-- <button v-if="item.isAvailable()" @click="item.checkOut()">Check Out</button>
      <button v-else @click="item.checkIn()">Check In</button> -->
      <button v-if="item.isAvailable()" @click="addToBag(item)">Add To Bag</button>
       <button v-else-if="item.status === 'out'" @click="item.checkIn()">Check In</button>
      <!--                <button v-if="removeMethod" @click="removeMethod(item);">Remove</button>-->
      <!--                <button @click="$emit('remove-me', item);">Remove</button>-->
      <!-- <button @click="item.remove()">Remove</button> -->
      <p v-if="item.status === 'in-bag'" >In Bag</p>

    </div>
  </div>
</template>

<script>
import AlbumDetails from "@/components/AlbumDetails";
import BookDetails from "@/components/BookDetails";
import MovieDetails from "@/components/MovieDetails";
import SongDetails from "@/components/SongDetails";
import FeatureMovieDetails from "@/components/FeatureMovieDetails";
import PodcastDetails from "@/components/PodcastDetails";
import AudiobookDetails from "@/components/AudiobookDetails";

export default {
  name: "LibraryItem",
  components: {AlbumDetails, BookDetails, MovieDetails, SongDetails, FeatureMovieDetails, PodcastDetails, AudiobookDetails},
  props: {
    item: {
      type: Object,
      required: true,
    },
    removeMethod: {
      type: Function,
    }
  },
  methods: {
    addToBag() {
      this.$emit("addToBag", this.item);
    },
  },
  computed: {
    typeOfItem() {
      return this.item.constructor.name + 'Details';
    }
  },
}
</script>

<style scoped>

</style>
