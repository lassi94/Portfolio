<template>
  <div class="about main">
      <div class="left-content">
          <h1 class="title slideUp">
              About me
          </h1>
          <p class="subtitle slideUp">
              {{ subtext }}
          </p>
          <router-link to="/portfolio-one" class="button is-outlined">Look at my skills</router-link> 
      </div>
      <div class="right-content">
          <img src="../assets/images/PictureLassiKorhonen.jpeg" align="left">
          <h1 class="title titleRight">Experience</h1>
          <div class="card" id="cardOne">
              <div class="card-content">
                  
              </div>
          </div>
          <div class="card" id="cardTwo">
              <div class="card-content">
                  
              </div>
          </div>
          <div class="card" id="cardThree">
              <div class="card-content">
                  
              </div>
          </div>
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
    align-items: left
    margin-left: 15px
    margin-top: -130px

#cardTwo
    margin-top: -160px
#cardThree
    margin-top: -190px

.right-content
    justify-items: left
    height: 100%
    background: #fff
    .title
        text-transform: uppercase
        font-size: 22px
        margin-left: 15px
        margin-top: -65px
    .titleRightTwo
        margin-top: -10px

   
.left-content
    background-color: #ffe476
    .title
        color: #284173
        .subtitle
            color: #284173
.button
    background: transparent
    margin: 45px auto
    font-size: 1.7em
    border: 1.5px solid #284173
    color: #284173
    border-radius: 0px
    cursor: pointer
    width: 350px 
    &:hover
        background: #284173
        color: #ffe476
img
    margin-top: 50px
    width: 160px
    height: 150px
    border-radius: 100px
    margin-left: 15px
</style>


