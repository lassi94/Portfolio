<template>

  <div class="home main">

        <div class="left-content">
            <h1 class="title">PASSIONATE SOFTWARE DEVELOPER</h1>
            <p class="subtitle">{{ subtext }}</p>
            <h2 class="title">Find me</h2>
            <hr align="center">
          
            <a href="https://github.com">
              <span class="icon is-large">
                <i class="fab fa-github"></i>
              </span>
            </a>

            <a href="https://linkedin.com">
              <span class="icon is-large">
                <i class="fab fa-linkedin-in"></i>
              </span>
            </a>
        </div>
        <div class="img1 right-content">
          <router-link to="/portfolio/one" class="button is-outlined">Browse Work</router-link>
        </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        subtext: 'Hi, Im Lassi Korhonen. I am an ambitious and passionate software developer who enjoys programming and learning new technologies. I have keen interest also in UI design and cyber security.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>


$colorPri: #0052CC

h1, h2 
  font-weight: normal
a 
  color: #42b983

h1.title
    margin-bottom: 70px
    text-transform: uppercase
    text-decoration: none
    text-align: left

p.subtitle
  margin-bottom: 70px
  text-align: left
  line-height: 52px

hr
  width: 50%
  margin: 0 auto
  margin-top: -15px
  
.right-content
    //background: url('../assets/images/home.png')
    width: 100%
    
.right-content
  .button
    background-color: transparent
    padding: 15px 20px
    font-size: 1.7em
    border: 1px solid #0052CC
    color: #0052CC
    text-transform: uppercase
    cursor: pointer
    &:hover
      background-color: $colorPri
      color: #fff

.icon
  color: black


</style>
