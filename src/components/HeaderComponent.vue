
<template>
    <main>
        <div class="top-header">
            <div class="header fluid-container">
                <div class="row">
                    <div class="logo col-lg-3">
                        <div class="logo1">
                            <img src="../img/logo1.png" alt="logo1">
                            <span>Зелёное Дерево</span>
                        </div>
                        <div class="logo2">
                            <img src="../img/logo.png" alt="logo2">
                        </div>
                    </div>
                    <div class="tabs col-lg-6">
                        <div class="top-menu">
                            <ul>
                                <li><router-link to="/">Продукция</router-link></li>
                                <li><router-link to="about">О компании</router-link></li>
                                <li><router-link :to="{path:'/', hash:'#product-prise'}" >Каталог товаров</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="tools col-lg-3">
                        <div class="tools-content">
                            <img src="../img/Login.png" alt="user">
                            <div class="product-count-in-cart">
                               
                                <router-link to="/cart"> <img src="../img/cart.png" alt="cart"></router-link>
                                <div class="product-count-in-cart-count">{{ getProductCountInCart }}</div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> 
        
        
    </main>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default{
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters(['getProductCountInCart']),
    },
    props:[
        'product'
    ],
    components:{
        
    }
}
</script>


<style scoped>


.top-header{
    padding: 15px 0;
    margin-bottom: 15px;
    
}

.tabs {
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
    font-size: 14px;
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
    background-color: rgb(253, 228, 0);
    text-decoration: none;
    color: rgb(0, 38, 255);
    border-radius: 100%;
    position: absolute;
    top:-6px;
    right: -10px;
}

.tools img{
    width: 36px;
    height: 36px;
    margin-left: 10px;
}

.logo{
    /* border: 1px solid #000; */
    padding: 5px 0;
    display: flex;
    justify-content: center;
    
}
.logo img{
    width: 36px;
    height: 36px;
}

.logo1{
    padding: 5px;
}
.logo1 img{
    margin-right: 10px;
}
.logo2{
    border-left: 1px solid #0000004d;
    width: 40px;
    height: 50px;
    top: 38px;
    margin-left: 10px;
    padding: 5px;

}
.header{
    padding-left: 100px;
    padding-right: 100px;
}
</style>