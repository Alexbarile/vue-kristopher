<script>

export default {
    name: 'Main',
    data() {
        return {
            
            
        }
    },
    
}
</script>

<template>
    <main>
        <div class="container-h hero">

            <!-- HERO -->

            <div class="row">
                 <div class="col d-flex justify-content-center pt-5">
                     <div class="logo">
                        <img src="../../public/img/KristopherWander3.png" alt="logo">
                     </div>
                 </div>
            </div>
            
            

            
                
            
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

main{
    .hero{
        background-image: url('../../public/img/hero.webp');
        width: 100%;
        height: 600px;
        background-size: cover;

        .logo img{
            width: 250px;
        }
    }
    

   
}

    
</style>