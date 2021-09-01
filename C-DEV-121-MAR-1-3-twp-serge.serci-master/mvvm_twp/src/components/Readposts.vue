<template>
  <div id="app" class="posts">
    <div class="flex justify-between">
      <div>
        <button type="submit" value="Submit">
          <Modal
            :category="category"
            :post="post"
            :getAllP="getAllP"
            :getOneP="getOneP"
            :getOneCom="getOneCom"
            :comment="comment"
          ></Modal>
        </button>
      </div>
      <div>
        <button v-on:click="deletePost(post.id)" class="mr-2 text-red-500">
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
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
var regex = /(<([^>]+)>)/gi;
var axios = require("axios");

export default {
  props: [
    "post",
    "post.id",
    "getAllP",
    "getOneP",
    "getOnePost",
    "category",
    "category.id",
    "comment",
    "getAllC",
    "getAllCategories",
  ],
  components: { Modal },

  data() {
    return {
      posts: [{}],
      regex,
    };
  },
  methods: {
    deletePost(id) {
      axios({
        method: "delete",
        url: "https://twp.oxy-development.fr/wp-json/wp/v2/posts/" + id,
        data: { title: this.titleprops, status: "publish" },
        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
      }).then(() => {
        this.getOneP(this.category.id);
      });
    },
  },
};
</script>

<style></style>
