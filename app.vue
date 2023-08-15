<template>
  <div class="p-8">
    <NuxtPage />
  </div>
</template>

<script setup>
import { api } from "./modules/blog-module/api/api";
import { usePostsStore } from "./modules/blog-module/store/usePosts";
const postsStore = usePostsStore();
const isLoading = ref(true);
const getPosts = async () => {
  try {
    isLoading.value = true;
    const { data } = await api.posts.getPosts();
    postsStore.posts = data; // сразу данные получил и в стор их сетать

    const getMyPostsFromLocalStorage = JSON.parse(
      localStorage.getItem("myPosts")
    );

    if (getMyPostsFromLocalStorage.length) {
      postsStore.posts = [...postsStore.posts, ...getMyPostsFromLocalStorage];
    }
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getPosts();
});
</script>
