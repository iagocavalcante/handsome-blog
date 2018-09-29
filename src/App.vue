<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <nav id="nav" class="nav" :class="opened ? 'nav--opened' : ''" role="navigation">
          <div class="nav__container">
                <!-- Nav List -->
            <ul class="nav__list" role="menubar">
              <li class="nav__item" :key="index" v-for="(menu, index) of menus">
                <a class="nav__link" href="#" @click="goTo(menu.route)">{{menu.title}}</a>
              </li>
            </ul>

            <!-- Burger -->
            <a href="#" class="nav__burger" @click="showMenu"></a>

          </div> <!-- __container -->
        </nav> <!-- .nav -->
      </header>
      <!-- End Intro Section -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menus: [
      {
        title: 'Home',
        route: '/'
      },
      {
        title: 'Blog',
        route: '/blog'
      },
      {
        title: 'Portfólio',
        route: '/portfolio'
      },
      {
        title: 'Certificados',
        route: '/certificates'
      }
    ],
    opened: false
  }),
  methods: {
    goTo (route) {
      this.opened = !this.opened
      this.$router.push(route)
    },
    showMenu () {
      this.opened = !this.opened
    }
  }
}  
</script>

<style lang="scss">
@import './assets/css/bootstrap.css';
@import './assets/css/style.css';
@import './assets/css/font-awesome.css';
@import './assets/css/menu.css';
</style>
