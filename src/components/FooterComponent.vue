<template>
    <main>
        <div class="top-footer">
            <div class="footer fluid-container">
                <div class="row">
                    <div class="footer-logo col-lg-3 col-sm-12">
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
                            <!-- <img src="#" alt="." class="soc_links_icon"> -->
                        </div>
                        </div>
                        
                    </div>
                    <div class=" col-lg-9 col-sm-12">
                        <div class="top-menu-footer">
                            <ul>
                                <li><router-link to="/">Главная</router-link></li>
                                <li><router-link to="about">О проекте</router-link></li>
                                <li><router-link :to="{path:'/', hash:'#categori_0'}" >Каталог товаров</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.footer{
    display: flex;
    flex-direction: column;
    /* justify-content: end; */
    /* flex-wrap: wrap; */
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

.top-menu-footer ul{
    gap: 30px;
    margin: 0;
    padding: 0;
}

@media (min-width:320px) and (max-width:992px) {
    .top-menu-footer ul{
        text-align: center;
    }
}

.logo1 img{
    margin-right: 10px;
}
.top-menu-footer ul li{
    list-style: none;
    margin: 8px; 
}

.top-menu-footer ul li a{
    color: black;
    font-size: 14px;
    text-decoration: none;
    
}

.footer-logo{
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: stretch;
    
}
.footer-logo img{
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
    background:rgb(255, 255, 255) url(../src/img/social-sharing.png) no-repeat -2px -3px;
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
    background:rgb(255, 255, 255) url(../src/img/social-sharing.png) no-repeat -33px -1px;
    background-size: 550%;
}

</style>