<script>
export default {
    name: 'Dropdown',
    props: ['title', 'items'],
    // props:{
    //     drop: Object
    // }

    // hover sul click alla voce del dropdown

    // data() {
    //     return {
    //         isOpen: false
    //     }
    // },
}
</script>

<template>
    <ul>
        <!-- <li class="menu-item" @click="isOpen = !isOpen"> -->
        <li class="menu-item">
            <a href="#" class="first">
                {{ title }}
            </a>
            <transition name="fade" appear>
                <!-- <ul class="sub-menu" v-if="isOpen"> -->
                <ul class="sub-menu">
                    <li v-for="(item, index) in items" :key="index" class="menu-item">
                        <a :href="item.url" class="item.active ? 'active' : ''">
                           {{ item.label }}
                        </a>
                    </li>
                </ul>
            </transition>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    ul{
        list-style-type: none;

        .menu-item{
            display: block;
            padding: 15px;
            position: relative;
            
            a{
                color: $lightgray;
                text-decoration: none;
                
                &.active, &:hover{
                    color: black;
                    border-top: 4px solid rgb(94,93,40);
                    padding-top: 15px;
                }
            }
        }

        // dropdown
        .sub-menu{
            display: none;
            position: absolute;
            background-color: white;
            border: 1px solid $gray;
            top: 100%;
            left: 0;
            transform: translateX(0);
            width: max-content;
        }

        .menu-item:hover .sub-menu{
            display: block;
        }

        // effetto trasparenza quando si chiude il dropwdown al click
        .fade-enter-active, .fade-leave-active{
            transition:  0.5s ease-out;
        }

        .fade-enter, .fade-leave-to{
            opacity: 0;
        }
    }

</style>