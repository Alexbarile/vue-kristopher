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
                    story: '#',
                    contact: '#',
                }
            ],
            social: [
                {
                    icon: 'fab fa-instagram',
                    url: 'https://www.instagram.com/kristopherwander/',
                },
                {
                    icon: 'fab fa-facebook-f',
                    url: 'https://www.facebook.com/kristopherwander',
                },
                {
                    icon: 'fab fa-tiktok',
                    url: 'https://www.tiktok.com/@kristopherwander?lang=en',
                },
                {
                    icon: 'fab fa-pinterest',
                    url: 'https://www.pinterest.it/kristopherwander/?invite_code=5989647a448240d48911db83ef30b967&sender=373024919044375459',
                },
            ]
        }
    },
    
}
</script>

<template>
    <footer>
        <div class="bg-footer">
            <div class="container-f font-questrial">

                <!-- LOGO -->

                <div class="row d-flex justify-content-center pt-5 pb-3">
                    <div class="col">
                        <div class="logo text-center">
                            <img src="../../public/img/KW-Milano.png" alt="logo KW">
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
                            <h6 class="font-marcellus">
                                KRISTOPHER WANDER CO
                            </h6>
                        </div>
                        <div class="mt-4">
                            <p><a :href="item.story">La nostra storia</a></p>
                            <p><a :href="item.contact">Contattaci</a></p>
                        </div>
                    </div>
                </div>

                <!-- SOCIAL MEDIA -->

                <div class="row d-flex flex-column">
                    <div class="col d-flex justify-content-center pb-3">
                        <ul v-for="(item, index) in social" :key="index">
                            <li><a :href="item.url" target="_blank" rel="noopener noreferrer"><i :class="item.icon" class="text-black"></i></a></li>
                        </ul>
                        <ul>
                            <li><a href="https://www.etsy.com/shop/KristopherWander?ref=profile_header" target="_blank" rel="noopener noreferrer"><img src="../../public/img/etsy.png" alt="" style="width: 35px;"></a></li>
                        </ul>
                    </div>
                    <div class="col d-flex justify-content-center text-white">
                        <p>@2023 by Kristopher Wander Co. All Rights Reserved.</p>
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

        ul{
            list-style: none;

            li{
                padding: 15px;
                font-size: 25px;
            }
        }

        a{
            text-decoration: none;
            color: white;
        }

        h6{
            font-size: 15px;
        }
    }

    

</style>