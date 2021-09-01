<template>
  <div class="flex flex items-end flex-col">
    <div>{{ comment.author_name }}<br /></div>

    <div>
      <input
        class="
          bg-gray-200
          hover:bg-gray-300
          focus:outline-none
          focus:ring-2
          focus:bg-gray-200
          focus:ring-opacity-50
          grid-col-span-2
        "
        v-model="contentCom"
        v-on:keyup.enter="updateComment(comment.id)"
      />
      <button v-on:click="updateComment(comment.id)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-1 text-green-800"
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
      <button
        type="button"
        v-on:click="deletePost(comment.id)"
        class="p-1 font-medium text-black rounded mr-2 text-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
var regex = /(<([^>]+)>)/gi;
var axios = require("axios");
export default {
  props: [
    "comment",
    "comment.id",
    "comment.post",
    "getAllCom",
    "getOneCom",
    "idp",
  ],
  data() {
    return {
      comments: [{}],
      content: "",
      contentCom: this.comment.content.rendered.replace(regex, ""),
    };
  },
  methods: {
    deletePost(id) {
      axios({
        method: "delete",
        url: "https://twp.oxy-development.fr/wp-json/wp/v2/comments/" + id,
        data: { author: this.author, content: this.content, post: this.post },
        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
      }).then(() => {
        this.getOneCom();
      });
    },

    updateComment(id) {
      axios({
        method: "put",
        url: "http://twp.oxy-development.fr/wp-json/wp/v2/comments/" + id,
        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
        data: { content: this.contentCom },
      })
        .then(() => {
          this.getOneCom();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
