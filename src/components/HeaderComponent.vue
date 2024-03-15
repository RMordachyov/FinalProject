<template>
    <div class="header fluid-container">
        <div class="row">
            <div class="header__logo col-lg-3">
                <div class="logo__logo1">
                    <img src="../img/logo1.png" alt="logo1">
                    <span>Зелёное Хозяйство</span>
                </div>
                <div class="logo__logo2">
                    <img src="../img/logo.png" alt="logo2">
                </div>
            </div>
            <div class="header__tabs col-lg-6">
                <div class="top-menu">
                    <ul>
                        <li>
                            <router-link to="/">Главная</router-link>
                        </li>
                        <li>
                            <router-link to="/about">О проекте</router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/', hash:'#categori_0'}" >Каталог товаров</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header__tools col-lg-3">
                <div class="tools-content">
                    <img src="../img/Search.png" alt="user" style="width: 28px; height: 28px; margin-right: 10px; margin-top: 3px;">
                    <img src="../img/Login.png" alt="user">
                    <div class="product-count-in-cart">
                        <router-link to="/cart"> <img src="../img/cart.png" alt="cart"></router-link>
                        <div class="product-count-in-cart-count">{{ getProductCountInCart }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cart_goto" v-show="showCartModalIcon">
        <router-link to="/cart"> <img src="../img/cart.png" alt="cart"></router-link>
        <div class="product-count-in-cart-count">{{ getProductCountInCart }}</div>
    </div>
</template>

<script>
import {  mapGetters } from 'vuex'
export default{
    data(){
        return{
            showCartModalIcon: false,
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll)
    },
    computed:{
        ...mapGetters(['getProductCountInCart']),
    },
    methods:{
        handleScroll (event) {
            var top = event.srcElement.scrollingElement.scrollTop
            if(top > 250 && this.getProductCountInCart > 0){
                this.showCartModalIcon = true
            }else{
                this.showCartModalIcon = false
            }
        }
    },
    props:[
        'product'
    ],
    components:{
        
    }
}
</script>


<style scoped>
.cart_goto{
  position: fixed;
  bottom: 10%;
  right: 20px;
  width: 50px;
  height: 50px;
  border: 1px solid lightgrey;
  border-radius: 50%;
  padding: 5px;
  z-index: 200;
  background-color: white;
}

.cart_goto img{
    width: 36px;
    height: 36px;
}

@media (min-width:320px) and (max-width:512px) {
    .cart_goto{
        left: 10px;
    }
}

.header__tabs {
    display: flex;
    justify-content: center; 
}

.top-menu {
    padding: 15px 0;
}

.top-menu ul{
    display: flex;
    gap: 30px;
    margin: 0; 
}

.top-menu ul li{
    list-style: none;
    text-align: center;
}

.top-menu ul li a{
    color: black;
    font-size: 18px;
    text-decoration: none;   
}

.tools-content{
    display: flex;
    justify-content: center;
    padding: 10px 0;
}

.product-count-in-cart{
    position: relative;
}

.product-count-in-cart-count{
    padding: 0px 6px;
    background-color: rgb(19, 161, 0);
    text-decoration: none;
    color: rgb(255, 255, 255);
    border-radius: 100%;
    position: absolute;
    top:-6px;
    right: -10px;
}

.header__tools img{
    width: 36px;
    height: 36px;
    margin-left: 10px;
}

.header__logo{
    padding: 5px 0;
    display: flex;
    justify-content: center;
    
}
.header__logo img{
    width: 36px;
    height: 36px;
}

.logo__logo1{
    padding: 5px;
    word-wrap: none;
}
.logo__logo1 img{
    margin-right: 10px;
}
.logo__logo2{
    border-left: 1px solid #0000004d;
    width: 40px;
    height: 50px;
    top: 38px;
    margin-left: 10px;
    padding: 5px;

}
.header{
    padding: 15px 100px;
    margin-bottom: 10px;
}
</style>