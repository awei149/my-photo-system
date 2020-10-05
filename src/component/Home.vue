<template>
    <div>
        <div class="backgroundImg">
            <span>WELCOME TO PHOTOS SHOP</span>
            <div class="navigation_bar" ref="nav">
                <ul>
                    <li><router-link to="/home/tiled">CONTACT</router-link></li>
                    <li><router-link to="/home/life">ABOUT</router-link></li>
                    <li><router-link to="/home/tiled">HOME</router-link></li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
        <!-- <v-tiled></v-tiled> -->
    </div>
</template>
<script>
import Tiled from './photostyle/Tiled.vue'
export default {
    data(){
        return{
            msg:'首页'
        }
    },
    methods: {
        rollDistance(){
            var top = document.documentElement.scrollTop;
            // var top = window.pageYoffset;
            console.log("aaaaa"+top)
            if(top > 400){
                // this.$refs.nav.style.opacity = 1;
                this.$refs.nav.style.backgroundColor = 'rgba(3,39,49,'+1+')';
                this.$refs.nav.style.height = 50 + 'px';
                this.$refs.nav.style.transition = 'all 0.5s ease-out';
            }
            if(top <= 400){
                this.$refs.nav.style.transition = 'all 0.5s ease-out';
                // this.$refs.nav.style.opacity = 0;
                this.$refs.nav.style.backgroundColor = 'rgba(3,39,49,'+0+')';
                this.$refs.nav.style.height = 80 + 'px';
            }
        }
    },
    components:{
        'v-tiled':Tiled
    },
    mounted () {
        document.addEventListener("scroll",this.rollDistance,true)
    }
}
</script>
<style lang="scss" scoped>
.backgroundImg{
    width: 100%;
    height: 425px;
    background-image: url("../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
    background-position: left center;
    background-repeat: no-repeat;
    overflow: hidden;
    span{
        font-size: 60px;
        color: #fff;
        line-height: 425px;
    }
}
.navigation_bar{
    position: fixed;
    top: 90px;
    width: 100%;
    height: 80px;
    background-color: rgba(3,39,49,0);
    // opacity: 0;
    z-index: 1;
    // display: flex;
    display:table;
    ul{
        margin: 0;
        padding: 0;
        // align-self:center;
        display: table-cell;
        vertical-align: middle;
        li{
            float: right;
            margin-right: 50px;
            // right: 0px;
            list-style: none;
            a{
                height: 12px;
                line-height: 12px;
                text-decoration-line: none;
                color: #fff;
                font-size: 12px;
                margin-right: 20px;
            }
        }
    }
}
    
</style>