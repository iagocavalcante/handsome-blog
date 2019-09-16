<template>
  <div class="layout">
    <AppNav />
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'

export default {
  components: {
    AppNav,
  }
}  
</script>
