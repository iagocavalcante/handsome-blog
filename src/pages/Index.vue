<template>
  <Layout>
    <AppMe />
  </Layout>
</template>

<script>
import AppMe from '~/components/AppMe.vue'

export default {
  components: {
    AppMe
  },
  metaInfo: {
    title: 'Home'
  }
}  
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
