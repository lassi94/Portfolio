<template>
    <div class="portfolio-two main">
        <div class="left-content slideUp">

            <router-link to="/portfolio-one" class="arrow arrow-up"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="2803 1363 102 102"><defs><filter id="a" x="2803" y="1363" width="102" height="102" filterUnits="userSpaceOnUse"><feOffset dx="5" dy="5" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(3654 1604) rotate(-180)"><g class="c" transform="matrix(-1, 0, 0, -1, 3654, 1604)"><circle class="a" cx="42" cy="42" r="42" transform="translate(2891 1451) rotate(-180)"/></g><path class="b" d="M2829.462,701.7h37.595l-18.318,34.318Z" transform="translate(-2043 -521)"/></g></svg></router-link>
            <h1 class="title">
                UI DESIGN
            </h1>

            <p class="subtitle">
                {{ subtitle }}
            </p>

            <router-link to="/portfolio-three" class="arrow arrow-down"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="2803 667 102 102"><defs><filter id="a" x="2803" y="667" width="102" height="102" filterUnits="userSpaceOnUse"><feOffset dx="5" dy="5" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(2044 -142)"><g class="c" transform="matrix(1, 0, 0, 1, -2044, 142)"><circle class="a" cx="42" cy="42" r="42" transform="translate(2807 671)"/></g><path class="b" d="M2829.462,701.7h37.595l-18.318,34.318Z" transform="translate(-2043 139)"/></g></svg></router-link>
        </div>
        <div class="right-content">
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'portfolio-two',
    data(){
        return{
            subtitle: 'I have a keen interest in UI-design because Im an artistic person by nature. By UI-design I can adduce my artistic skills'
        }
    }
  
}
</script>

<style lang="sass" scoped>

.left-content
    .title
        color: #E79100
        text-transform: uppercase
        font-weight: bold

.right-content
    background-color: #284173


</style>



