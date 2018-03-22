<template>
  <div id="app">
    <div class="container main-content">
      <div class="inner">
        <nav class="navbar is-trasparent" role="navigation">
          <div class="container"> 
            <div class="navbar-brand">
              <router-link to="/" class="navbar-item logo">LK</router-link>

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
  </div>
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


html,body
  background-color: #F1F0F0
  width: 100%
  height: 100%

body
  display: grid
  grid-template-columns: 100%
  justify-items: center
  align-items: center
  grid-template-areas: "face"

#app
  grid-area: face
  font-family: 'Montserrat'
  text-align: center
  color: #2c3e50
  width: 90%
  max-width: 1500px
  height: 80%
  margin: 50px auto 

.main-content
  background-color: #fff
  box-shadow: 30px 30px 40px lightgray
  overflow: hidden
  height: 100%
  .inner
    position: relative
    width: 100%
    height: 100%
    min-height: 100%

.navbar
  z-index: 4
  padding: 30px
  &.is-transparent
    background-color: transparent

.logo
  font-weight: 700
  text-transform: uppercase

.navbar
  .navbar-item
    background: transparent
    color: #222324
    &:hover
      background-color: transparent

.main
  height: 100%
  display: grid
  grid-template-columns: 42% auto
  grid-template-areas: "left right"

.left-content
  grid-area: left
  padding: 20px 50px 15px 50px

.right-content
  grid-area: right
  background: #d6d6d6
  display: grid
  grid-template-columns: 100%
  justify-items: center
  align-items: center
  height: 100%


</style>
