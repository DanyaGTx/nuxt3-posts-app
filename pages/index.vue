<template>
  <div class="mt-14">
    <h1 class="text-center text-lg">Catalog</h1>
    <div class="text-center mt-12">
      <NuxtLink
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        to="/create-post"
        >Create your own post</NuxtLink
      >
    </div>
    <h2>Posts</h2>
    <div v-if="!isLoading">
      <div v-for="post in postsStore.posts" :key="post.id">
        <p>Post # {{ post.id }}</p>
        <p>Info: {{ post.title }}</p>
      </div>
    </div>
    <div v-else>Loding...</div>
  </div>
</template>

<script setup>
import { usePostsStore } from "../modules/blog-module/store/usePosts";
const postsStore = usePostsStore();
</script>
