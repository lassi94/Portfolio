<template>
  <div id="app">
    <div class="container main-content">
    <nav class="navbar" role="navigation">
      <div class="container"> 
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">LK</router-link>

        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
        <div class="navbar-menu">
          <div class="navbar-start">
           
          </div>
          <div class="navbar-end">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/about" class="navbar-item">About</router-link>
            <router-link to="/blog" class="navbar-item">Blog</router-link>
            <a class="navbar-item">
              <router-link to="/contact" class="button is-oulined">
              <span id="contact">Contact me</span>
              </router-link>
            </a>
          </div>
      </div>
      </div>
    </nav>

    <transition name="fade" mode="out-in">
        <router-view />
    </transition>

    </div>
    <!--
    <div class="container">
        <div class="inner">
          <nav>
            <router-link to="/" id="logo">LK</router-link>
            
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>

          </nav>

          <transition name="fade" mode="out-in">
            <router-view />
          </transition>

        </div>
    </div>-->

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">

@import '../node_modules/bulma/bulma.sass'
/*@import 'mq.sass'*/
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700')

#app 
  font-family: 'Montserrat'
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.main-content
  margin: 50px auto
  background-color: #fff

//body
  //background-color: #F1F0F0

</style>
