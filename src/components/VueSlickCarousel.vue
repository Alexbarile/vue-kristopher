<script>
export default {
    name: 'VueSlickCarousel',
    data() {
      return {
        
      }
    },

}
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="p-3"><h3>1</h3></div>
    <div class="p-3"><h3>1</h3></div>
    <div class="p-3"><h3>1</h3></div>
    <div class="p-3"><h3>1</h3></div>
    <div class="p-3"><h3>1</h3></div>
    <div class="p-3"><h3>1</h3></div>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

h3{
    padding: 20px;
    border: 1px solid black;
}



</style>
