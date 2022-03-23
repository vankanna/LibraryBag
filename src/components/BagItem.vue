<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{item.title}}</h3>
      <button @click="removeItem(item)">X</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "BagItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeItem(item) {
      this.$emit("updateLibrary", item);
      item.remove();
    }
  }
}
</script>

<style scoped>

</style>
