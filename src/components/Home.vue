<template>

  <div class="home main">

    <section class="section">

      <div class="container">
      <div class="columns">
        <div class="column is-half pd">
            <h1 class="title">PASSIONATE SOFTWARE DEVELOPER</h1>
            <p class="subtitle">{{ subtext }}</p>
            <h2 class="title">Find me</h2>
            <hr align="center">
          
            <a href="https://github.com">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
            </a>

            <a href="https://linkedin.com">
              <span class="icon">
                <i class="fab fa-linkedin"></i>
              </span>
          </a>
        </div>
        <div class="column is-half pd1">
          <img src="" alt="">
        </div>
      </div>
      </div>
    </section>

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
h1, h2 
  font-weight: normal
a 
  color: #42b983

h1.title
    margin-top: 20px
    margin-bottom: 70px
    text-transform: uppercase
    text-decoration: none
    text-align: left

p.subtitle
  margin-bottom: 70px
  text-align: left

hr
  width: 50%
  margin: 0 auto
  margin-top: -15px
  
  

</style>
