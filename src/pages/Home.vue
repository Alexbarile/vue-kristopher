<script>
import CardShop from './CardShop.vue';
export default {
    name: 'Home',
    components: {
        CardShop,
    },
}
</script>

<template>
  <div>
    <h1>ciao</h1>
    <CardShop :shop="shop"></CardShop>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;



</style>
