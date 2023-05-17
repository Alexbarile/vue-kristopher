<script>
export default {
    name: 'Footer',
    data() {
        return {
            contact: [
                {
                    label: 'Contatti',
                    address: 'Milano, Italia',
                    phone: '+39 3802346458',
                    mail: 'kristopherwander@gmail.com',
                }
            ],
            shop: [
                {
                    label: 'Shop',
                    candles: '#',
                    personalize: '#',
                    treatment: '#',
                }
            ],
            connections: [
                {
                    label: 'Collegamenti utili',
                    faq: '#',
                    shipping: '#',
                    terms: '#',
                    payment: '#',
                }
            ],
            bio: [
                {
                    label: 'KRISTOPHER WANDER CO',
                    story: '#',
                    contact: '#',
                }
            ],
        }
    },
    
}
</script>

<template>
    <footer>
        <div class="container-f">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col">
                        <div class="logo text-center">
                            <img src="../../public/img/KW-Milano-white.png" alt="logo KW">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <p v-for="(item, index) in contact" :key="index">
                            {{ item.label }}
                        </p>
                    </div>
                    <div class="col text-center">
                        ciao
                    </div>
                    <div class="col text-center">
                        ciao
                    </div>
                    <div class="col text-center">
                        ciao
                    </div>
                    
                    
                </div>
            </div>
        </div>

    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    .col{
        .logo{
            width: 100%;
            padding: 10px;

            img{
                width: 150px;
            }
        }
    }

    

</style>