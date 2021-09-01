<template>
  <div>
    <div>
      <button type="button" v-on:click="toggleModal()">
        {{ post.title.rendered }}
      </button>
      <div
        v-if="showModal"
        class="
          fixed
          inset-0
          top-0
          z-50
          items-center
          justify-center
          w-3/4
          overflow-x-hidden overflow-y-auto
          outline-none
          focus:outline-none
          border-blueGray-200
          rounded-t
        "
      >
        <div class="relative w-auto max-w-6xl mx-auto my-6">
          <!--content-->
          <div
            class="
              relative
              flex flex-col
              w-full
              bg-gray-100
              rounded-lg
              shadow-lg
              outline-none
              focus:outline-none
            "
          >
            <!--header-->
            <div
              class="p-5 border-b border-solid border-blueGray-200 rounded-t"
            >
              <div
                class="flex items-start justify-between text-3xl font-semibold"
              >
                <input
                  class="
                    text-3xl
                    font-semibold
                    bg-transparent
                    hover:bg-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:bg-gray-200
                    focus:ring-opacity-50
                  "
                  :title="title"
                  v-model="titleprops"
                  v-on:keyup.enter="updatePost(post.id)"
                /><button v-on:click="updatePost(post.id)">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
                <button
                  class="
                    float-right
                    p-1
                    ml-auto
                    text-3xl
                    font-semibold
                    leading-none
                    text-black
                  "
                  v-on:click="toggleModal()"
                >
                  <span
                    class="
                      block
                      w-6
                      h-6
                      text-2xl text-black
                      outline-none
                      focus:outline-none
                    "
                  >
                    X
                  </span>
                </button>
              </div>
              <div class="flex items-start justify-between">
                <h3 class="text-base">Categorie: {{ this.category.name }}</h3>
              </div>
            </div>
            <div
              class="p-5 border-b border-solid border-blueGray-200 rounded-t"
            >
              <div
                class="flex items-start justify-between text-3xl font-semibold"
              >
                <p class="">Description</p>
              </div>
              <div class="flex items-start text-3xl font-semibold">
                <textarea
                  class="
                    text-base
                    bg-gray-200
                    hover:bg-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:bg-gray-200
                    focus:ring-opacity-50
                    resize-none
                    w-full
                  "
                  :content="contentprops"
                  v-model="contentprops"
                  v-on:keyup.enter="updatePost(post.id)"
                />
                <button v-on:click="updatePost(post.id)">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <!--body-->
            <div class="relative flex-auto p-6 rounded-t">
              <div
                class="flex items-start justify-between text-3xl font-semibold"
              >
                <p class="">Commentaires</p>
              </div>
              <div class="flex items-start justify-between">
                <Createcomment
                  class="text-base"
                  :comment="comment"
                  :post="post"
                >
                </Createcomment>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showModal"
        class="fixed inset-0 z-40 bg-black opacity-25"
      ></div>
    </div>
  </div>
</template>
<script>
var axios = require("axios");
var regex = /(<([^>]+)>)/gi;
import Createcomment from "@/components/Createcomment.vue";

export default {
  components: { Createcomment },
  props: [
    "category",
    "category.id",
    "post",
    "post.id",
    "getOneP",
    "getAllP",
    "updateCom",
    "getOneCom",
    "comment",
    "getAllC",
  ],
  name: "modal",
  data() {
    return {
      posts: [{}],
      showModal: false,
      titleprops: this.post.title.rendered,
      contentprops: this.post.content.rendered.replace(regex, ""),
      categories: [{}],
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },

    updatePost(id) {
      axios({
        method: "put",
        url: "http://twp.oxy-development.fr/wp-json/wp/v2/posts/" + id,

        headers: {
          Authorization: "Basic ZXBpdGVjaDpFcGl0ZWNoMTM=",
        },
        data: {
          title: this.titleprops,
          content: this.contentprops,
          status: "publish",
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
