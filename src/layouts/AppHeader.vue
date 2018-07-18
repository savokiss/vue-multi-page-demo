<template>
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">Cover</h3>
      <nav class="nav nav-masthead justify-content-center">
        <a @click="go(item)" class="nav-link" :target="item.external ? '_blank' : '_self'" :class="{ active: item.name === current }" v-for="item in navList" :key="item.name">
          {{ item.title }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    current: {
      type: String,
      default: 'home'
    }
  },
  data () {
    return {
      navList: [
        { name: 'home', link: '/', title: 'Home' },
        { name: 'about', link: '/about', title: 'About' },
        { name: 'contact', link: 'https://getbootstrap.com/', title: 'Contact', external: true }
      ]
    }
  },
  methods: {
    go (item) {
      if (item.external) {
        window.open(item.link)
      } else {
        this.$router.push(item.link)
      }
    }
  }
}
</script>
