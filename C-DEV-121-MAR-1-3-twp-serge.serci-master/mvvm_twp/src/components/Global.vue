<template>
  <div>
    <div class="hello">
      <Readposts
        class="
          bg-white bg-opacity-80
          ml-2
          mr-2
          rounded-md
          mb-2
          hover:bg-opacity-100
          pt-2
          
        "
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :getAllP="this.getAllposts"
        :getOneP="this.getOnePost"
        :idp="post.id"
        :category="category"
      >
      </Readposts>
    </div>
    <div>
      <Createposts
        :getAllP="this.getAllposts"
        :getOneP="this.getOnePost"
        :category="this.category"
        :post="post"
      ></Createposts>
    </div>
  </div>
</template>

<script>
import Readposts from "@/components/Readposts.vue";
import Createposts from "@/components/Createposts.vue";

var axios = require("axios");

export default {
  props: ["category", "getAllCategories"],
  components: { Readposts, Createposts },
  data() {
    return {
      posts: [],
      showModal: false,
      categories: [],
    };
  },
  mounted() {
    this.getOnePost(this.category.id);
  },
  methods: {
    getOneCom() {
      axios({
        method: "get",
        url:
          "http://twp.oxy-development.fr/wp-json/wp/v2/comments/?post=" +
          this.id,

        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
      })
        .then((response) => {
          this.comments = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getAllposts() {
      axios({
        method: "get",
        url: "http://twp.oxy-development.fr/wp-json/wp/v2/posts",

        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
      })
        .then((response) => {
          this.posts = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getOnePost(id) {
      axios({
        method: "get",
        url:
          "http://twp.oxy-development.fr/wp-json/wp/v2/posts?categories=" + id,

        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
      })
        .then((response) => {
          this.posts = response.data;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
