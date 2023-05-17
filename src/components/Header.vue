<script>
import Dropdown from './Dropdown.vue';

export default {
    name: 'Header',
    components: {
        Dropdown
    },
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
                    label: 'NOSTRASTORIA',
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
            ],
            dropdown: [
                {
                    label: 'CURA DELLE CANDELE',
                    url: '#',
                },
                {
                    label: 'RIUTILIZZA IL TUO BARATTOLO',
                    url: '#',
                },
                {
                    label: 'TAPPI DI LEGNO',
                    url: '#',
                },
            ]
        }
    },
    
}
</script>

<template>
    <header>
        <div class="container-h">

            <!-- FIRST PART -->

            <div class="bg-lightgreen">
               <div class="row">
                    <div class="col d-flex justify-content-center p-3">
                        <div>
                            <a class="text-white" href="#">Spedizione gratuita per ordini superiori a 100€</a>
                        </div>
                    </div>
               </div>
            </div>

            <!-- SECOND PART -->

            <div class="bg-gray">
                <div class="row d-flex justify-content-between">

                    <!-- LOGO -->

                    <div class="col">
                        <div class="logo">
                            <img src="../../public/img/KW-Milano-white.png" alt="logo KW">
                        </div>
                    </div>

                    <!-- NAVBAR -->

                    <div class="col d-flex align-items-center">
                        <nav>
                            <ul class="d-flex">
                                <li v-for="(item, index) in navbar" :key="index" class="menu-item">
                                    <a :href="item.url" class="item.active ? 'active' : ''">
                                        {{ item.label }}
                                    </a>
                                </li>
                                <Dropdown title="ALTRO" :items="dropdown"></Dropdown>
                                <!-- <Dropdown v-for="(item, index) in dropdown" :key="index" :drop="item"></Dropdown> -->
                            </ul>
                        </nav>
                    </div>

                    <!-- LOGIN -->

                    <div class="col d-flex justify-content-center align-items-center">

                        <!-- shop -->

                        <div class="p-2">
                            <a class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <i class="fa-solid fa-cart-shopping" style="color: #ffffff; font-size: 30px;"></i>
                            </a>
                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div>
                                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <!-- accedi -->

                        <div class="p-2">
                            <a href="#">
                                <button class="button">
                                    <i class="fa-solid fa-circle-user"></i>
                                    <p class="text">Accedi</p>
                                </button>
                            </a>
                        </div>

                        <!-- language -->

                        <div class="p-2 d-flex">
                            <button>
                                <img class="it" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCAzIDIiPg0KPHBhdGggZmlsbD0iIzAwOTI0NiIgZD0ibTAsMGgxdjJoLTF6Ii8+DQo8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMSwwaDF2MmgtMXoiLz4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0yLDBoMXYyaC0xeiIvPg0KPC9zdmc+DQo=" alt="it">
                            </button>
                            <button>
                                <img class="england" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUgMTUiIGhlaWdodD0iNzIwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoMjV2MTVoLTI1eiIvPg0KPGcgZmlsbD0iI2NmMTQyYiI+DQo8cGF0aCBkPSJtMTEsMGgzdjE1aC0zeiIvPg0KPHBhdGggZD0ibTAsNmgyNXYzaC0yNXoiLz4NCjwvZz4NCjwvc3ZnPg0K" alt="en">
                            </button>
                        </div>
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

    // FIRST PART
    .bg-lightgreen{
        background-color: $lightgreen;
    }

    // SECOND PART
    .bg-gray{
        background-color: $gray;

        .col{

            // LOGO
            .logo{
                width: 100%;
                padding: 10px;

                img{
                    width: 150px;
                }
            }

            // NAVBAR

            ul{
                list-style-type: none;

                .menu-item{
                    padding: 15px;
                    position: relative;
                    
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

            // LOGIN

            // accedi

            a{
                text-decoration: none;
                .button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 15px;
                    gap: 15px;
                    background-color: rgb(102,101,93);
                    outline: 1px solid $gray;
                    outline-offset: -1px;
                    border-radius: 5px;
                    border: none;
                    transition: 400ms;
                }
    
                .button .text, .button i {
                    color: white;
                    font-weight: 700;
                    font-size: 1em;
                    transition: 400ms;
                }
    
                .button:hover .text, .button:hover i  {
                    color: rgb(168, 168, 168);
                }
            }

            // language
            
            button {
                background: none;
                border: none;
                padding: 10px 10px;
                border-radius: 50px;
                
                .it {
                    width: 35px;
                    background-size: 100% 100%;
                }
                .england {
                    width: 35px;
                    background-size: 100% 100%;
                }

                &:hover{
                    background-color: rgb(102,101,93);
                }
            } 
        }
    }
}

    
</style>