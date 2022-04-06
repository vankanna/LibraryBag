<template>
<div>
  <div class="search">
    <form id="searchHolder"  @submit.prevent="searchForMedia">
            <input id="searchTerm" v-model="searchTerm" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button type="submit" class="btn btn-outline-success my-2 my-sm-0">Search</button>
      </form>
  </div>
  <div class="library">
  <h3>Library</h3>
  <div class="card">
    <library-item v-on:addToBag="addItemToBag($event)" v-for="(item, i) in library" :key="i" :item="item"></library-item>
  </div>
  </div>
  <br>
  <div class="bag">
  <h3>Bag</h3>
  <div class="bag card">
    <bag-item v-on:updateLibrary="updateLibrary($event)" v-for="(item, i) in bag" :key="i" :item="item"></bag-item>
  </div>
  <button @click="checkoutBagItems()">Checkout</button>
  </div>
</div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";
import BagItem from "@/components/BagItem";

import BaseCollection from "@/models/BaseCollection";
import {LibraryItemDecorator, Song, FeatureMovie, Podcast, Audiobook } from "@/models/LibraryItems";
import BagItemObject from "@/models/BagItem";
export default {
  name: "LibraryManager",
  components: {LibraryItem, BagItem},
  data() {

    // When I make library item here the component it is attached to will update properly
    // and when i add to bag the status will show in the component on the UI
    const library = new BaseCollection();
    //library.addItem(new LibraryItemDecorator(new Book('Learn Vue', 345)));
    // library.addItem(new LibraryItemDecorator(new Movie('The Muppets', 107)));
    // library.addItem(new LibraryItemDecorator(new Movie('Strange Brew', 97)));
    // library.addItem(new LibraryItemDecorator(new Album('Lilac', 'IU', 12)));
    // library.addItem(new LibraryItemDecorator(new Album('Pallete', 'IU', 11)));

    const bag = new BaseCollection();

    return {
      library: library,
      bag: bag,
      searchTerm: '',
    }
  },

  methods: {
    addItemToBag: function(item) {
      item.inBag();
      console.log(item.title)
      this.bag.addItem(new BagItemObject(item.title))
      console.log(item)
    },

    updateLibrary: function(item) {
      item.remove();
      const result = this.library.find( ({ title }) => title === item.title );
      result.checkIn();
    },

    checkoutBagItems: function() {
      for (var i = 0; i <= this.library.length; i++) {
        const result = this.bag.find( ({ title }) => title === this.library[i].title);
        if (result) {
          result.remove()
          this.library[i].checkOut();
        }
      }
    },

    searchForMedia: async function() {
      console.log("its working")
      // GET request using fetch with error handling
      fetch( `https://itunes.apple.com/search?term=${this.searchTerm}&limit=10` )
        .then( function( response ){
            if( response.status != 200 ){
              console.log("EREORRRR")
                throw response.status;
            }else{
              console.log("SUC")
                return response.json();
            }
        }.bind(this))
        .then( function( data ){
            this.fetchResponse = data;
            console.log("WOWOW")
            console.log(data)
            this.processData(data)

        }.bind(this))
        .catch( function( error ){
            this.fetchError = error;
        }.bind(this));


    },
    // When I add library items here, the components will not show new status
    // changes when i add to bag and remove from bag?
    processData: function(itunesData) {
      if(!itunesData && !itunesData.results) {
        throw new Error("No Data Recieved");
      } else {
        for (var i = 0; i < itunesData.results.length; i++) {
          var Iitem = itunesData.results[i];
          if (Iitem.kind === 'song') {
            this.library.addItem(new LibraryItemDecorator(new Song(Iitem.artistName, Iitem.artworkUrl100, Iitem.trackName, Iitem.collectionName)));
          } else if (Iitem.kind === 'feature-movie'){
            this.library.addItem(new LibraryItemDecorator(new FeatureMovie(Iitem.artistName, Iitem.artworkUrl100, Iitem.trackName, Iitem.shortDescription || Iitem.longDescription)));
          }  else if (Iitem.kind === 'podcast'){
            this.library.addItem(new LibraryItemDecorator(new Podcast(Iitem.artistName, Iitem.artworkUrl100, Iitem.trackName)));
          } else if (Iitem.wrapperType === 'audiobook'){
            this.library.addItem(new LibraryItemDecorator(new Audiobook(Iitem.artistName, Iitem.artworkUrl100, Iitem.collectionName)));
          } else {
            console.log('NO MATCH')
            console.log(Iitem)
          }
        }
      console.log('library')
      console.log(this.library)
      }
    }
  },

}
</script>

<style scoped>

</style>
