<script>
export default {
    data() {
        return {
            navbar: [
                {
                    label: 'HOME',
                    url: '#',
                    active: false
                },
                {
                    label: 'SHOP',
                    url: '#',
                    active: false
                },
                {
                    label: 'STORIA',
                    url: '#',
                    active: false
                },
                {
                    label: 'PERSONALIZZA',
                    url: '#',
                    active: false
                },
                {
                    label: 'CONTATTACI',
                    url: '#',
                    active: false
                },
                {
                    label: 'ALTRO',
                    url: '#',
                    active: false
                },
            ]
        }
    },
    
}
</script>

<template>
    <header>
        <div class="container-h">

            <!-- first part -->

            <div class="bg-lightgreen">
               <div class="row">
                    <div class="col d-flex justify-content-center p-3">
                        <div>
                            <a class="text-white" href="#">Spedizione gratuita per ordini superiori a 100€</a>
                        </div>
                    </div>
               </div>
            </div>

            <!-- second part -->

            <div class="bg-gray">
                <div class="row d-flex justify-content-between">
                    <div class="col">
                        <div class="logo">
                            <img src="../../public/img/KW-Milano-white.png" alt="">
                        </div>
                    </div>
                    <div class="col d-flex align-items-center">
                        <ul class="d-flex">
                            <li v-for="(item, index) in navbar" :key="index">
                                <a :href="item.url" class="item.active ? 'active' : ''">
                                    {{ item.label }}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col">
                        ciao
                    </div>
                </div>
                
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

header{

    // first part
    .bg-lightgreen{
        background-color: $lightgreen;
    }

    // second part
    .bg-gray{
        background-color: $gray;
        

        .col{

            // logo
            .logo{
                width: 100%;
                padding: 10px;

                img{
                    width: 150px;
                }
            }

            // navbar

            ul{
                list-style-type: none;

                li{
                    padding: 15px;
                    
                    a{
                        color: $lightgray;
                        text-decoration: none;

                        &.active, &:hover{
                            color: black;
                            border-top: 4px solid rgb(94,93,40);
                            padding-top: 20px;
                        }
                    }
                }
            }

            // login
        }
    }

}

    
</style>