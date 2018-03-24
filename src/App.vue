<template>
  <div id="app">
    <div class="container main-content">
        <div class="inner">
          <nav>
            <router-link to="/" id="logo">LK</router-link>
            
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
              <li><router-link to ="/contact" class="button is-outlined">Contact me</router-link></li>
            </ul>

          </nav>

          <transition name="fade" mode="out-in">
            <router-view />
          </transition>

        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  data(){
    
  }
}

</script>

<style lang="sass">

@import 'global.sass'

</style>
