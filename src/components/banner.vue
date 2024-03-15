<template>
    <main>
        <div class="banner_col">
            <div class="banner_container">
                <h1>Зелёное Хозяйство</h1>
                <p>Сломить дерево — секунда, а вырастить — годы</p>
                <div class="banner_buttons_container">
                    <a href="#categori_0" class="banner_button green_button">К товарам</a>
                    <router-link to="/about" class="banner_button green_button">О проекте</router-link>
                </div>
            </div> 
        </div>
        
    </main>
</template>

<style scoped>
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
    /* border:1px solid #000; */
}

.banner_col{
    width: 400px;
    height: 380px;
    position: absolute;
    left:10%;
    right: 0;
    bottom: 0;
    top: 50%;
    transform: translate(0, -50%);
}

.banner_container{
    position: absolute;
    padding: 10px;
    
    border-radius: 10px;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 50%;
    transform: translate(0, -50%);
    background-color: rgba(240, 248, 255, 0.7);
}

.banner_container p{
    padding:  5px 0;
}

.banner_buttons_container{
    padding: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
}
.banner_button{
    padding: 8px 30px;
    border-radius: 6px;
    text-shadow: 2px 0px 2px #000;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}

@media (max-width:992px) {
    .banner_col_1_container{
        padding: 5px;
    }
}
@media  (max-width: 512px) {
    .banner_button{
        padding: 4px 20px;
    }
    .banner_buttons_container{
        padding: 0px;
        
    }
    .banner_buttons_container{
        padding: 20px 0;
        justify-content: center;
    }
    .banner_col{
        width: 320px;
        padding: 0;
    }
}
@media (min-width:320px) and (max-width:512px) {
    .banner_buttons_container{
        padding: 0px 0;
        justify-content: center;
    }
    .banner_col{
        width: 314px;
    }
}

@media (max-width:320px){
    .banner_col{
        width: 314px;
        left: 0;
    }
}

</style>