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
        <div class="bg-footer">
            <div class="container-f">

                <!-- LOGO -->

                <div class="row d-flex justify-content-center p-3">
                    <div class="col">
                        <div class="logo text-center">
                            <img src="../../public/img/KW-Milano-white.png" alt="logo KW">
                        </div>
                    </div>
                </div>
                <div class="row text-white p-5">

                    <!-- CONTATTI -->

                    <div v-for="(item, index) in contact" :key="index" class="col">
                        <div>
                            <h5>
                                {{ item.label }}
                            </h5>
                        </div>
                        <div class="mt-4">
                            <p>Indirizzo: {{ item.address }}</p>
                            <p>Telefono: {{ item.phone }}</p>
                            <p>Email: <a href="mailto:kristopherwander@gmail.com">{{ item.mail }}</a></p>
                        </div>
                    </div>

                    <!-- SHOP -->

                    <div v-for="(item, index) in shop" :key="index" class="col">
                        <div>
                            <h5>
                                {{ item.label }}
                            </h5>
                        </div>
                        <div class="mt-4">
                            <p><a :href="item.candles">Candele</a></p>
                            <p><a :href="item.personalize">Personalizza</a></p>
                            <p><a :href="item.treatment">Cura</a></p>
                        </div>
                    </div>

                    <!-- CONNECTIONS -->

                    <div v-for="(item, index) in connections" :key="index" class="col">
                        <div>
                            <h5>
                                {{ item.label }}
                            </h5>
                        </div>
                        <div class="mt-4">
                            <p><a :href="item.faq">FAQ</a></p>
                            <p><a :href="item.shipping">Spedizione e resi</a></p>
                            <p><a :href="item.terms">Termini & Condizioni</a></p>
                            <p><a :href="item.payment">Modalit&#224; di pagamento</a></p>
                        </div>
                    </div>

                    <!-- BIO -->

                    <div v-for="(item, index) in bio" :key="index" class="col">
                        <div>
                            <h5>
                                {{ item.label }}
                            </h5>
                        </div>
                        <div class="mt-4">
                            <p><a :href="item.story">La nostra storia</a></p>
                            <p><a :href="item.contact">Contattaci</a></p>
                        </div>
                    </div>
                </div>

                <!-- SOCIAL MEDIA -->

                <div class="row">
                    <div class="col">
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

        a{
            text-decoration: none;
            color: white;
        }
    }

    

</style>