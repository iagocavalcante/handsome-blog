<template>
  <div class="wrapper">
    <header>
      <nav id="nav" class="nav" :class="opened ? 'nav--opened' : ''" role="navigation">
        <div class="nav__container">
              <!-- Nav List -->
          <ul class="nav__list" role="menubar">
            <li class="nav__item" :key="index" v-for="(menu, index) of menus">
              <g-link class="nav__link" :to="menu.route">{{menu.title}}</g-link>
              <!-- <a class="nav__link" href="#" :to="menu.route">{{menu.title}}</a> -->
            </li>
          </ul>

          <!-- Burger -->
          <a href="#" class="nav__burger" @click="showMenu"></a>

        </div> <!-- __container -->
      </nav> <!-- .nav -->
    </header>
    <!-- End Intro Section -->
  </div>
</template>

<script>
export default {
  data: () => ({
    menus: [
      {
        title: 'Home',
        route: '/'
      },
      {
        title: 'Blog',
        route: '/posts'
      },
      // {
      //   title: 'Portfólio',
      //   route: '/portfolio'
      // },
      // {
      //   title: 'Certificados',
      //   route: '/certificates'
      // }
    ],
    opened: false
  }),
  methods: {
    showMenu () {
      this.opened = !this.opened
    }
  }
}
</script>

<style>

</style>template