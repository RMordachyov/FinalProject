<template>
    <main>
        <div class="top-footer">
            <div class="footer fluid-container">
                <div class="row">
                    <div class="footer-logo col-lg-3">
                        <div class="logo1">
                            <img src="../img/logo1.png" alt="logo1">
                            <span>NameOfNo</span>
                            <div class="soc-links">
                            <ul>
                                <li><a href="#"><img src="#" alt="." class="soc_links_icon"></a></li>
                                <li><a href="#"><img src="#" alt="." class="soc_links_icon"></a></li>
                                <li><a href="#"><img src="#" alt="." class="soc_links_icon"></a></li>
                                <li><a href="#"><img src="#" alt="." class="soc_links_icon"></a></li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                    <div class=" col-lg-9">
                        <div class="top-menu-footer">
                            <ul>
                                <li><a href="#">Продукция</a></li>
                                <li><a href="#">О компании</a></li>
                                <li><a href="#">Каталог товаров</a></li>
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
    justify-content: end;
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
    gap: 30px;
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
    max-width: 20px;
    max-height: 20px;
    border: 1px solid #000;
}
</style>