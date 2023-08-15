<template>
  <div>
    <NuxtLink
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/"
      >Back to Posts</NuxtLink
    >
  </div>
  <div class="mt-[100px]">
    <h1 class="text-center mb-5 text-lg">It's time to create new Post :)</h1>

    <CreatePostInput v-model="postDescription" />
    <div class="text-center mt-[20px]">
      <CreatePostButton @addNewPost="createNewPost">Create</CreatePostButton>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { usePostsStore } from "../modules/blog-module/store/usePosts";
import CreatePostInput from "../modules/ui-kit/components/CreatePostInput.vue";
import CreatePostButton from "../modules/ui-kit/components/CreatePostButton.vue";
const postsStore = usePostsStore();
const postDescription = ref("");
const myPosts = ref([]);
const existingMyPosts = localStorage.getItem("myPosts");
const createNewPost = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: postDescription.value,
    })
    .then((response) => {
      console.log(response.data); // сэтнуть в стор ?
      const newPost = {
        id: postsStore.posts.length + 1,
        title: postDescription.value,
      };
      postsStore.posts.push(newPost);

      if (existingMyPosts) {
        myPosts.value = JSON.parse(existingMyPosts);
      }
      postDescription.value = "";
      myPosts.value.push(newPost);
      localStorage.setItem("myPosts", JSON.stringify(myPosts.value));
      alert("Your post was added");
      navigateTo("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
