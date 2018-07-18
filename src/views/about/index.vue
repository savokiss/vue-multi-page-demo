<template>
  <div class="about w-100 h-100">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <AppHeader current="about"></AppHeader>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">{{ $options.name }}</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>

      <AppFooter></AppFooter>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/layouts/AppHeader.vue'
import AppFooter from '@/layouts/AppFooter.vue'
export default {
  name: 'about',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
