
<template>
  <div class="portfolio-one main">
    <div class="left-content slideUp">
      <h1 class="title">
        {{ title }}
      </h1>
      <p class="subtitle">
        {{ subtitle }}
      </p>
      <img src="../assets/images/work.png" id="web">
      <router-link to="/portfolio-two" class="arrow arrow-down"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="2803 667 102 102"><defs><filter id="a" x="2803" y="667" width="102" height="102" filterUnits="userSpaceOnUse"><feOffset dx="5" dy="5" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(2044 -142)"><g class="c" transform="matrix(1, 0, 0, 1, -2044, 142)"><circle class="a" cx="42" cy="42" r="42" transform="translate(2807 671)"/></g><path class="b" d="M2829.462,701.7h37.595l-18.318,34.318Z" transform="translate(-2043 139)"/></g></svg></router-link>
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

#web
  margin-top: -50px
  width: 80%
  height: 40%

.img2
  background: url('../assets/images/portfolio-one.png')

.right-content
  display: grid
  grid-template-columns: 100%
  grid-tempalte-areas: "one two three"
  

</style>


