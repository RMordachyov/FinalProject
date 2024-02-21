<template>
    <main class="container product_container">
        <div class="row">
            <div class="bread_crumbs">
                test
            </div>
            <div class="product_container_info">
                <div class="product_imgs_container col-xl-6 col-lg-7 col-md-7">
                    <div class="product_main_img">
                        <img src="../img/Test.png" alt="">
                    </div>
                    <div class="product_next_imgs">
                        <div class="product_next_img">
                            <img src="../img/Test.png" alt="">
                        </div>
                        <div class="product_next_img">
                            <img src="../img/Test.png" alt="">
                        </div>
                        <div class="product_next_img">
                            <img src="../img/Test.png" alt="">
                        </div>
                        <div class="product_next_img">
                            <img src="../img/Test.png" alt="">
                        </div>
                        <div class="product_next_img">
                            <img src="../img/Test.png" alt="">
                        </div>
                        <div class="product_next_img">
                            <img src="../img/Test.png" alt="">
                        </div>
                        <div class="product_next_img">
                            <img src="../img/Test.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="product_description_container col-xl-6 col-lg-5 col-md-5">
                    <div class="product_description_title"><h1>Случайный товар с большим названием, которое не влезает на одну строкуfsdfdsfdsfds</h1></div>
                    <div class="pruduct_status">В наличи Article no.: random-gift</div>
                    <div class="product_colors">
                        <div class="product_color" style="background-color: aquamarine;"></div>
                        <div class="product_color" style="background-color:bisque ;"></div>
                        <div class="product_color" style="background-color:darkcyan;"></div>
                        <div class="product_color" style="background-color:deepskyblue;"></div>
                    </div>
                    <div class="adding_user">
                        <p>testuser</p>
                    </div>
                    <div class="product_price">
                        <h2>15 000т</h2>
                    </div>
                    <div class="product_ading_to_cart"><a href="#">Добавить в корзину</a></div>
                </div>
            </div>
        </div> 
    </main>
</template>

<style scoped>
*{
    /* border:1px solid #000; */
}

.adding_user{
    color: lightgray;
    padding: 15px;
    padding-left: 25px;
    background:white url(../img/User.png) no-repeat 0 35%;
}
.product_description_container{
    padding-left: 15px;
    display: flex;
    flex-direction: column;

}

.product_description_title{
    padding-top: 15px;
}
.product_ading_to_cart{
    height: 120px;
    position: relative;
}
.product_ading_to_cart a{
    position: absolute;
    background-color:  rgba(33, 167, 0, 0.74);
    padding: 15px 30px;
    color: white;
    font-size: 23px;
    font-weight: 600;
    border-radius: 10px;
    text-decoration: none;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
    
}
.product_colors{
    display: flex;
    align-items: stretch;
}
.pruduct_status{
    color: lightgray;
    padding-bottom: 20px;
    padding-left: 15px;
}

.product_color{
    width: 30px;
    height: 30px;
    border: 2px solid #00000079;
    margin-left: 20px;
    border-radius: 5px;
}
.product_container{
    margin-top: 50px;
}

.bread_crumbs{
    width: 100%;
    color: lightgray;
}

.product_container_info{
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
}

.product_imgs_container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: stretch; */
    flex-wrap: wrap;
}

/* .product_description_container{
    height: 200px;
}  */

.product_main_img{
    width: 400px;
    height: 400px;
    padding: 5px;
}

.product_main_img img{
    width: 100%;
    height: 100%;
}

.product_next_imgs{
    max-height: 420px;
    padding:20px;
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
    overflow-x: hidden;
}

@media (min-width:320px) and (max-width:992px) {
    .product_main_img{
        width: 320px;
        height: 320px;
        padding: 5px;
    }
    .product_next_imgs{
        max-width: 300px;
        max-height: 120px;
        padding:20px;
        display: flex;
        flex-direction: row;
        overflow-y: hidden;
        overflow-x:scroll;
    }
    .product_next_img{
        min-width: 80px;
        min-height: 80px;
        border-radius: 20px;
        margin-left: 10px;
        
    }
    
    .product_next_img img{
        border-radius: 20px;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .product_ading_to_cart a{
        position: absolute;
        padding: 10px 16px;
        font-size: 20px;
        text-align: center;
        left: 0;
        right: 0;
    }
    
}
.product_next_img{
    width: 80px;
    height: 80px;
    border-radius: 20px;
    margin-bottom: 10px;
    
}

.product_next_img img{
    border-radius: 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}




</style>