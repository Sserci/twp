<template>

  <div class="flex flex-row gap-4 overflow-y-auto">
    <Categories
      class="rounded-md"
      style="width: 300px; min-width: 300px"
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :getAllC="this.getAllCategories"
    ></Categories>
    <div class="flex-grow-0">
      <div v-if="showModal">
        <div class="bg-gray-200 border-2 border-black">
          <Addcategory :getAllC="this.getAllCategories"></Addcategory>
        </div>
      </div>
      <button class="rounded" type="button" v-on:click="toggleModal()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-14 h-14"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
import Addcategory from "@/components/Addcategory.vue";

var axios = require("axios");

export default {
  props: ["category.id"],
  components: { Categories, Addcategory },
  data() {
    return { categories: [{}], showModal: false };
  },

  mounted() {
    this.getAllCategories();
  },
  methods: {
    getAllCategories() {
      axios({
        method: "get",
        url: "https://twp.oxy-development.fr/wp-json/wp/v2/categories?orderby=id&exclude=1",
        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
      })
        .then((response) => {
          this.categories = response.data;
          /* console.log(JSON.stringify(this.categories)); */
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>
