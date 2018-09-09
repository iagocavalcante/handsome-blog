<template>
  <div id="app">
    <div class="wrapper">
      <!-- Header ("header--dark", "header-transparent", "header--sticky")-->
      <header id="header" class="header header--dark header-transparent header--sticky">
        <!-- Nav Bar -->
        <nav id="navigation" class="header-nav">
          <div class="container">
            <div class="row d-flex flex-md-row align-items-center">
              <div class="nav-menu ml-auto">
                <ul class="">
                  <li class="nav-menu-item" :key="index" v-for="(menu, index) of menus">
                    <a href="#" @click="goTo(menu.route)">{{menu.title}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <!-- End Intro Section -->
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menus: [
        {
          title: 'Home',
          route: '/'
        },
        {
          title: 'Blog',
          route: '/blog'
        }
      ]
    }
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    }
  }
}  
</script>

<style lang="scss">
@import './assets/css/bootstrap.css';
@import './assets/css/style.css';
@import './assets/css/font-awesome.css';
</style>
