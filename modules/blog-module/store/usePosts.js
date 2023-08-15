import { defineStore } from 'pinia'
import { api } from '../api/api'
export const usePostsStore = defineStore('posts', {
  state: () => {
    return { 
        posts: []
     }
  },
})