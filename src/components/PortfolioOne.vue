
<template>
  <div class="portfolio-one main">
    <div class="left-content slideUp">
      <h1 class="title">
        {{ title }}
      </h1>
      <p class="subtitle">
        {{ subtitle }}
      </p>
      <img src="../assets/images/work.png">
      <router-link to="/portfolio-two" img src="../assets/Group3.png" class="arrow arrow-down"></router-link>
    </div>
    <div class="right-content img2">
      <div class="card">
        <div class="card-content">
          <p class="title">
            <span class="icon">
              <i class="fab fa-angular"></i>
            </span>
          </p>
          <p class="subtitle">
            Angular5
          </p>
          <p class="subtitle">
            <a class="button is-md is-outlined">
              <span>More info</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioOne',
  data(){
    return{
      title: 'Web Development',
      subtitle: 'I have worked with various different web development  technologies and platforms in my self-driven projects.'
    }
  }
  
}
</script>

<style lang="sass" scoped>

.arrow
  height: 100px
  widht: 100px

</style>


