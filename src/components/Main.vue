<script>
import VueSlickCarousel from './VueSlickCarousel.vue';


export default {
    name: 'Main',
    components: {
        VueSlickCarousel,
    },
   
    data() {
        return { 
            settings: {
            
                dots: true,
                focusOnSelect: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 3,
                touchThreshold: 5
            },
            testoCompleto: "L’odore del momento in cui ci siamo visti per la prima volta. Quel giorno pioveva a dirotto, ti ricordi? Io sono entrata nel primo bar che ho trovato per riparami dalla pioggia. Ed eccoti lì. Al tavolo da solo a leggere un libro con un bicchiere di vino rosso. Nell’attimo in cui sono entrata tu hai alzato gli occhi e mi hai sorriso. E in quell’attimo ho capito che non ci saremmo mai più lasciati. È l’odore di quando fuori faceva freddo, ma dentro io già sentivo il calore che avresti portato nella mia vita.",
            mostraTesto: false,
            candles: [
                {
                    label: 'candles1.webp',
                    title: 'Flaconi',
                    price: '€ 10,00',
                },
                {
                    label: 'candles2.webp',
                    title: 'Contagocce 100 ml',
                    price: '€ 5,00',
                },
                {
                    label: 'candles3.webp',
                    title: "Candele in cera d'api",
                    price: '€ 18,00',
                },
                {
                    label: 'candles4.webp',
                    title: "Candele in cera d'oliva",
                    price: '€ 8,00',
                },
                
            ],
        }
    },

    methods: {
        getImagePath: function (img) {
            return `/img/${img}`
        },

        // funzione per visualizzare testo con bottone 

        toggleTesto() {
            this.mostraTesto = !this.mostraTesto;
        }
    },
    computed: {

        // controllo su visualizzazione testo max n caratteri e poi mostra per intero 

        testoVisualizzato() {
            if (this.mostraTesto) {
                return this.testoCompleto;
            } else if (this.testoCompleto.length > 70) {
                return this.testoCompleto.slice(0, 70) + '...';
            } else {
                return this.testoCompleto;
            }
        },
    }
}
</script>

<template>
    <main>

        <!-- HERO -->

        <div class="container-h hero">
            <div class="row">
                 <div class="col d-flex justify-content-center pt-5">
                     <div class="logo">
                        <img src="../../public/img/KristopherWander3.png" alt="logo">
                     </div>
                 </div>
            </div>
        </div>

        <!-- CANDLES -->

        <div class="container-h bg-gray">
            <div class="row">
                <div class="col p-0">
                    <h1 class="font-oswald">CANDELE</h1>
                    <p class="font-jura py-5"><strong>LA VITA È FATTA DI MOMENTI DA RICORDARE. <br>
                        LE CANDELE PER OGNI OCCASIONE CHE RICORDANO <br> LE NOSTRE STORIE.</strong>
                    </p>
                </div>
            </div>
            <div class="row ">
                <div v-for="(i, index) in candles" :key="index" class="col width-4">
                    <div class="candles">
                        <img :src="getImagePath(i.label)" alt="candles">
                        <h3 class="font-questrial">{{ i.title }}</h3>
                        <span>{{ i.price }}</span>
                        <button class="font-questrial">Aggiungi al carrello</button>
                    </div>
                </div>
            </div>
            <div class="row py-5">
                <div class="col d-flex justify-content-center">
                    <button class="font-questrial">Carica altro</button>
                </div>
            </div>
        </div>

        <!-- HERO 2 -->

        <div class="container-h">
            <div class="row">
                <div class="col ">
                    <div class="hero-2">
                        <img src="../../public/img/hero2.webp" alt="">
                    </div>
                </div>
                <div class="col bg-lightgreen">
                    <div class="text">
                        <h1 class="font-oswald text-end">PERSONALIZE <br>
                            YOUR <br>
                            CANDLE
                        </h1>
                        <p class="font-marcellus text-white mb-3">
                            <span class="red">L</span>a nostra memoria ha la capacità di conservare e recuperare le esperienze passate. Chiudere gli occhi e scavare nel nostro vissuto talvolta ci permette di viaggiare nel tempo e rivivere per un attimo un ricordo di una vita trascorsa che non si vuole dimenticare.
                        </p>
                        <p class="font-marcellus text-white mb-3">
                            I ricordi sono dei porti sicuri in cui tornare, ma ciò che li rende così preziosi è anche aver la possibilità di condividerli con le persone che ami.
                        </p>
                        <p class="font-marcellus text-white mb-3">
                            <span class="bg">Descrivi un ricordo della tua vita in cui sei stato felice.
                            Accendi la candela e torna a quel momento per un attimo.
                            Condividi l’esperienza vissuta con i tuoi amici e i tuoi cari.</span>
                        </p>
                        <p class="font-marcellus text-white mb-3">
                        </p>
                        <p class="font-marcellus text-white">
                            Ci penseremo noi a farlo recapitare alla persona con cui hai condiviso quest’esperienza.
                        </p>
                        <div class="position-relative">
                            <img class="position-absolute top-0 end-0" src="../../public/img/mini-candles.webp" alt="">
                        </div>
                        <p class="font-marcellus text-white pt-3">
                            Se non hai un’idea precisa, ecco un esempio da cui prendere spunto:
                        </p>
                        <div class="font-questrial d-flex align-items-stretch py-3">
                            <div class="icon pe-4">
                                <i class="fa-regular fa-envelope close"></i>
                                <i class="fa-regular fa-envelope-open open"></i>
                            </div>
                            <div class="ps-3">
                                <p>{{ testoVisualizzato  }}</p>
                                <span class="show" @click="toggleTesto">{{ mostraTesto ? 'Meno' : 'Continua a leggere' }}</span>
                                <!-- l'ordine del SE e ALTRIMENTI fa riferimento all'ordine del controllo del COMPUTED -->
                            </div>
                        </div>
                        <div class="d-flex align-items-center pt-4">
                            <div class="ps-3 pe-4">
                                <img class="" src="../../public/img/mini-candles.webp" alt="">
                            </div>
                            <button class="personalize font-questrial">PERSONALIZZA</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CAROSELLO -->

        <div class="container-80">
            <div class="row">
                <div class="col-title">
                    <h2 class="font-questrial text-white text-center p-3">
                        #kristopherwanderco #kristopherwanderfamily
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-content">

                    

                    <VueSlickCarousel :v-bind="settings"></VueSlickCarousel>
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

    // HERO

    .hero{
        background-image: url('../../public/img/hero.webp');
        width: 100%;
        height: 600px;
        background-size: cover;

        .logo img{
            width: 250px;
        }
    }

    // CANDLES

    .bg-gray{
        background-color: $lightgraytwo;

        .row{
            width: 90%;
            margin: 0 auto;

            h1{
                font-size: 55px;
                color: $gray;
                letter-spacing: 7px;
            }

            p{
                font-size: 27px;
            }

            .width-4{
                width: calc(100%/4);
                display: flex;
                justify-content: center;

                .candles img{
                    padding: 0 15px 0 15px;
                    width: 320px;
                }

                .candles h3{
                    padding: 15px 15px 15px 15px;
                    font-size: 19px;
                    font-weight: 400;
                }

                .candles span{
                    padding: 0px 15px 0px 15px;
                    display: block;
                    font-size: 21px;
                    font-weight: 400;
                    color: $gray;
                }

                .candles button{
                    margin: 15px 15px 15px 15px ;
                    padding: 10px 0px;
                    width: 90%;
                    border-radius: 4px;
                    border: 1px solid black;
                    background-color: rgb(127,159,169);
                    color: white;
                    transition: 0.5s;

                    &:hover{
                        color: rgb(127,159,169);
                        background-color: rgb(92, 132, 144);
                    }
                }
            }

            button{
                padding: 10px 0px 10px 0px;
                width: 25%;
                border: none;
                border-radius: 4px;
                background-color: $lightgreen;
                color: white;
                transition: 0.5s;

                &:hover{
                    color: rgb(221, 221, 221);
                    background-color: rgb(150, 141, 133);
                }
            }
        }
    }

    // HERO 2

    .hero-2 img{
        width: 100%;
    }

    .bg-lightgreen{
        background-color: $lightgreen;

        .text{
            padding: 10px 140px 0 140px;

            h1{
                font-size: 40px;
                font-weight: 700;
                color: #2B4A53;
            }

            p{
                font-size: 16px;
                font-weight: 400;
                line-height: 30px;
    
                .red{
                    font-size: 40px;
                    color: darkred;
                }
                .bg{
                    background-color: #2c6b7c;
                }   
            }
            
            .position-relative img{
                rotate: -30deg;
            }

            .icon .close{
                font-size: 60px;
                rotate: 10deg;
                display: block;
            }

            .icon:hover .close{
                display: none;
            }

            .icon .open{
                font-size: 60px;
                rotate: -10deg;
                display: none;
            }

            .icon:hover .open{
                display: block;
            }

            .show{
                font-weight: bold;
                color: #2B4A53;
                cursor: pointer;
            }

            .personalize{
                border: 1px solid brown;
                background-color: #4F4F4FB3;
                padding: 15px 120px;
                font-weight: 700;
                transition: 0.5s;

                &:hover{
                    background-color: #6f6f6fb3;
                    color: white;
                }
            }
        }
    }

    // CAROSELLO

    .container-80{

        .row{
            
            .col-title{
                background-color: #4F4F4F91;
            }

            .col-content{
                background-color: #4c4b4bc8;
            }


        }

    }



    

   
}

    
</style>