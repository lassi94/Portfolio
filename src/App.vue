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

@import '../node_modules/bulma/bulma.sass'
/*@import 'mq.sass'*/
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700')

$colorPri: #0052CC

html,body
  background-color: #F1F0F0
  width: 100%
  height: 100%

h1, h2 
  color: $colorPri

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

nav
  display: grid
  grid-template-columns: 200px auto
  grid-template-areas: "logo navi"
  position: absolute
  padding: 30px
  z-index: 4
  width: 90%

#logo
  grid-area: logo
  align-items: left
  text-align: left
  font-weight: 700
  text-transform: uppercase
  margin-left: 20px
  font-size: 1.7em
  position: absolute
  color: #0052CC
  letter-spacing: 5px

ul
  grid-area: navi
  list-style-type: none
  justify-self: right
  margin-right: -100px
  position: absolute

li
  display: inline
  font-size: 1.3em
  text-transform: uppercase
  padding: 0 15px
  font-weight: bold

a
  color: #222324

.button
  background-color: transparent
  border-radius: 5px
  border: 1px solid #222324
  &:hover
    background-color: #222324
    color: #fff
.main
  height: 100%
  display: grid
  grid-template-columns: 40% auto
  grid-template-areas: "left right"

.left-content
  grid-area: left
  padding: 110px 50px 15px 50px

.right-content
  grid-area: right
  background: #d6d6d6
  display: grid
  grid-template-columns: 100%
  justify-items: center
  align-items: center
  height: 100%

h1.title
    margin-bottom: 70px
    text-transform: uppercase
    text-decoration: none
    text-align: left

p.subtitle
  margin-bottom: 70px
  text-align: left
  line-height: 52px

</style>
