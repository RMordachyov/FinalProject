<template>
    <div class="footer fluid-container">
        <div class="footer__logo ">
            <div class="logo1">
                <img src="../img/logo1.png" alt="logo1">
                <span>Зелёное Хозяйство</span>
                <div class="soc-links">
                <ul>
                    <li><a href="#" class="soc_links_icon" id="soc_links_f"></a></li>
                    <li><a href="#" class="soc_links_icon" id="soc_links_w"></a></li>
                    <li><a href="#" class="soc_links_icon" id="soc_links_T"></a></li>
                    <li><a href="#" class="soc_links_icon" id="soc_links_tw"></a></li>
                </ul>
            </div>
            </div>
        </div>
        <div>
            <div class="footer__top-menu">
                <ul>
                    <li><router-link to="/">Главная</router-link></li>
                    <li><router-link to="/about">О проекте</router-link></li>
                    <li><router-link :to="{path:'/', hash:'#categori_0'}" >Каталог товаров</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    /* border:1px solid #000; */
}
.footer{
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
}

.soc-links{
    height: 40px;
    width: 200px;
    padding: 10px 10px;
    display: flex;
    justify-content: center;
}

.soc-links ul li{
    list-style: none;
}

.soc-links ul{
    display: flex;
    gap: 3px;
    margin: 0; 
    padding: 0;
}

.top-footer{
    padding: 10px ;
}

.footer__top-menu ul{
    gap: 30px;
    margin: 0;
    padding: 0;
}

@media (min-width:320px) and (max-width:992px) {
    .footer__top-menu ul{
        text-align: center;
    }
}

@media (min-width:320px) and (max-width:600px) {
    
    .footer{
        justify-content: center;
    }
    .footer__logo{
        margin-bottom: 30px;
    }
}

.logo1{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
}

.logo1 img{
    /* margin-right: 10px; */
    margin: 0 auto;
    
}



.footer__top-menu ul li{
    list-style: none;
    margin: 8px; 
}

.footer__top-menu ul li a{
    color: black;
    font-size: 18px;
    text-decoration: none;
    
}

.footer__logo{
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-right: 30px;
    
}
.footer__logo img{
    width: 36px;
    height: 36px;
}

.footer{
    padding:20px 100px;
}

.soc_links_icon{
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    
}

#soc_links_f{
    background:rgb(255, 255, 255) url(../src/img/social-sharing.png) no-repeat -2px -2px;
    background-size: 550%;
}

#soc_links_w{
    background:rgb(255, 255, 255) url(../src/img/social-sharing.png) no-repeat -135px -36px;
    background-size: 550%;
}

#soc_links_T{
    background:rgb(255, 255, 255) url(../src/img/social-sharing.png) no-repeat -2px -36px;
    background-size: 550%;
}

#soc_links_tw{
    background:rgb(255, 255, 255) url(../src/img/social-sharing.png) no-repeat -33px -2px;
    background-size: 550%;
}

</style>