<template>
  <section class="ptb ptb-sm-80">
    <div class="container">
      <list-posts-medium v-if="isLoadedMedium" :posts="postsMedium"></list-posts-medium>
      <list-posts-vila v-if="isLoadedVila" :posts="postsVila"></list-posts-vila>
      <loading v-if="loading"></loading>
    </div>
  </section>
</template>

<script>
import Loading from './../../../components/Loading.vue'
import ListPostsMedium from './ListPostsMedium'
import ListPostsVila from './ListPostsVila'
export default {
  name: 'Posts',
  components: {
    ListPostsMedium,
    ListPostsVila,
    Loading
  },
  props: {
    service: {
      required: true
    }
  },
  data: () => ({
    posts: [],
    postsVila: [],
    postsMedium: [],
    isLoadedVila: false,
    isLoadedMedium: false,
    loading: true
  }),
  mounted() {
    this.$service.getAllVila()
      .then(response => {
        this.postsVila = [...response.data]
        this.posts = [...this.postsVila]
        this.isLoadedVila = true
        this.loading = false
      })
      .catch(error => console.warn('Não carregou os posts'))
    this.$service.getAllMedium()
      .then(response => {
        this.postsMedium = [...response.data]
        this.posts = [...this.postsMedium]
        this.isLoadedMedium = true
        this.loading = false
      })
      .catch(error => console.warn('Não carregou os posts'))
  }
}
</script>

<style>

</style>
