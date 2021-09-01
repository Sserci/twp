<template>
  <form id="categoryname">
    <input type="text" v-model="name" class="rounded" />
    <button type="submit" @click.prevent="createCategory()">Ajouter</button>
  </form>
</template>

<script>
var axios = require("axios");

export default {
  props: ["getAllC", "category.id"],
  data() {
    return { categories: [{}] };
  },
  methods: {
    createCategory() {
      axios({
        method: "post",
        url: "http://twp.oxy-development.fr/wp-json/wp/v2/categories",
        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
        data: { name: this.name },
      }).then(() => {
        this.getAllC();
        this.name = "";
      });
    },
  },
};
</script>

<style></style>
