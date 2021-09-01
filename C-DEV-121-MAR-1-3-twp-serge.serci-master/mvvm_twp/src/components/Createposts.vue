<template>
  <div class="flex justify-between">
    <input
      class="
        w-3/4
        text-center
        outline-solidblack
        rounded
        bg-transparent
        mt-1
        ml-2
        mb-2
        placeholder-gray-500
        text-black
      "
      v-model="title"
      placeholder="Ajoutez une carte"
      v-on:keyup.enter="sendPost()"
    />

    <div class="">
      <button @click.prevent="sendPost()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 mr-1 text-green-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
var axios = require("axios");

export default {
  props: [
    "post",
    "post.id",
    "getAllP",
    "category",
    "category.id",
    "getOneP",
    "getOnePost",
  ],

  methods: {
    sendPost() {
      axios({
        method: "post",
        url: "http://twp.oxy-development.fr/wp-json/wp/v2/posts",
        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
        data: {
          title: this.title,
          status: "publish",
          categories: this.category.id,
        },
      })
        .then(() => {
          this.getOneP(this.category.id);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
