<template>
  <div>
    <div class="flex justify-between bg-opacity-50 bg-gray-200 rounded-t-xl">
      <input
        class="
          flex
          w-9/12
          bg-opacity-50
          rounded-t-xl
          bg-transparent
          pt-2
          pl-2
          pb-2
          text-xl
          hover:outline-solidblack
        "
        v-model="contentcat"
        v-on:keyup.enter="updateCategory(category.id)"
      />
      <button v-on:click="deleteCategory(category.id)">
        <svg
          class="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </button>
    </div>
    <div class="home bg-gray-200 bg-opacity-50 rounded-b-xl">
      <Global :category="this.category"></Global>
    </div>
  </div>
</template>

<script>
import Global from "@/components/Global.vue";

var axios = require("axios");
export default {
  components: {
    Global,
  },
  props: ["category", "category.id", "getAllC"],
  data() {
    return {
      categories: [{}],
      isDisplay: false,
      contentcat: this.category.name,
    };
  },
  methods: {
    updateCategory(id) {
      axios({
        method: "get",
        url: "https://twp.oxy-development.fr/wp-json/wp/v2/categories",
        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
      })
        .then(() => {
          axios({
            method: "put",
            url: "http://twp.oxy-development.fr/wp-json/wp/v2/categories/" + id,
            headers: {
              Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
            },
            data: { name: this.contentcat },
          }).then(() => {
            this.getAllC();
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    el: ".upload",
    show: function () {
      this.isDisplay = true;
    },
    hide: function () {
      this.isDisplay = false;
    },
    deleteCategory(id) {
      axios({
        method: "delete",
        url:
          "https://twp.oxy-development.fr/wp-json/wp/v2/categories/" +
          id +
          "?force=true",
        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
      }).then(() => {
        this.getAllC();
      });
    },
  },
};
</script>

<style></style>
