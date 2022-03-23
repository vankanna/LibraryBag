<template>
<div>
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
import {LibraryItemDecorator, Album, Book, Movie} from "@/models/LibraryItems";
import BagItemObject from "@/models/BagItem";
export default {
  name: "LibraryManager",
  components: {LibraryItem, BagItem},
  data() {

    const library = new BaseCollection();
    library.addItem(new LibraryItemDecorator(new Book('Interaction Design', 234)));
    library.addItem(new LibraryItemDecorator(new Book('Learn Vue', 345)));
    library.addItem(new LibraryItemDecorator(new Movie('The Muppets', 107)));
    library.addItem(new LibraryItemDecorator(new Movie('Strange Brew', 97)));
    library.addItem(new LibraryItemDecorator(new Album('Lilac', 'IU', 12)));
    library.addItem(new LibraryItemDecorator(new Album('Pallete', 'IU', 11)));

    const bag = new BaseCollection();

    return {
      library: library,
      bag: bag,
    }
  },
  methods: {
    addItemToBag: function(item) {
      this.bag.addItem(new BagItemObject(item.title))
      console.log(item)
    },

    updateLibrary: function(item) {
      const result = this.library.find( ({ title }) => title === item.title );
      result.checkIn();
      console.log("what")
      console.log(result)
    },

    checkoutBagItems: function() {
      for (var i = 0; i <= this.library.length; i++) {
        const result = this.bag.find( ({ title }) => title === this.library[i].title);
        if (result) {
          result.remove()
          this.library[i].checkOut();
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
