<script setup>
import banner from './Banner.vue'
</script>

<template>
    <main>
        <div class="top-header">
            <div class="header fluid-container">
                <div class="row">
                    <div class="logo col-lg-3">
                        <div class="logo1">
                            <img src="../img/logo1.png" alt="logo1">
                            <span>NameOfNo</span>
                        </div>
                        <div class="logo2">
                            <img src="../img/logo2.png" alt="logo2">
                        </div>
                    </div>
                    <div class="tabs col-lg-6">
                        <div class="top-menu">
                            <ul>
                                <li><a href="#">Продукция</a></li>
                                <li><a href="#">О компании</a></li>
                                <li><a href="#">Каталог товаров</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="tools col-lg-3">
                        <div class="tools-content">
                            <img src="../img/Login.png" alt="user">
                            <img src="../img/cart.png" alt="mail">
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> 
        <div class="fluid-container banner">
            <banner />
        </div>
        
    </main>
</template>

<style scoped>

.banner{
    height: 100%;
    border: 1px solid #0000004d;
    border-radius: 5px;
}

.top-header{
    padding: 15px 0;
    border: 1px solid #0000004d;
    border-radius: 10px;
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