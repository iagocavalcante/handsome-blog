<template>
  <section class="ptb ptb-sm-80">
    <div class="container">
      <list-posts-vila v-if="isLoadedVila" :posts="postsVila"></list-posts-vila>
      <list-posts-medium v-if="isLoadedVila" :posts="postsMedium"></list-posts-medium>
    </div>
  </section>
</template>

<script>
import ListPostsMedium from './ListPostsMedium'
import ListPostsVila from './ListPostsVila'
export default {
  name: 'Posts',
  components: {
    ListPostsMedium,
    ListPostsVila
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
    isLoadedMedium: false
  }),
  mounted() {
    this.$service.getAllVila()
      .then(response => {
        console.log('response vila: ', response.data)
        this.postsVila = [...response.data]
        this.posts = [...this.postsVila]
        this.isLoadedVila = true
      })
      .catch(error => console.warn('Não carregou os posts'))
    this.$service.getAllMedium()
      .then(response => {
        console.log('response medium: ', response)
        this.postsMedium = [...response.data]
        this.posts = [...this.postsMedium]
        this.isLoadedMedium = true
      })
      .catch(error => console.warn('Não carregou os posts'))
  }
}
</script>

<style>

</style>
