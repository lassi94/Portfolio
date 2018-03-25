<template>
    <div class="portfolio-two main">
        <div class="left-content">
            <h1 class="title">
                UI DESIGN
            </h1>
            <p class="subtitle">
                {{ subtitle }}
            </p>
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
            subtitle: 'I have a keen interest in UI-design because Im an artistic person by nature. By UI-design I can adduce mu artistic skills'
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



