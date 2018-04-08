<template>
  <div class="about main">
      <div class="left-content">
          <h1 class="title slideUp">
              About me
          </h1>
          <p class="subtitle slideUp">
              {{ subtext }}
          </p>
      </div>
      <div class="right-content">
          <img src="">
          <h1 class="title titleRight">Experience</h1>
          <div class="card">
              <div class="card-content">

              </div>
          </div>
          <div class="card">
              <div class="card-content">
                  
              </div>
          </div>
          <div class="card">
              <div class="card-content">
                  
              </div>
          </div>
          <h1 class="title titleRight">Projects</h1>
      </div>
  </div>
</template>
<script>
export default {
    name: 'About',
    data(){
        return{
            subtext: 'I have worked with various different web development  technologies and platforms in my self-driven projects.'
        }
    }
  
}
</script>
<style lang="sass" scoped>

.card
    width: 90%
    margin: -9em auto

.right-content
    text-align: left
    height: 100%
    background: #fff
   
.left-content
    background-color: #FFCC25
    .title
        color: #284173
        .subtitle
            color: #284173
</style>


