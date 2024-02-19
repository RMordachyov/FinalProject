<template>
    <main class="container products_component">
        <div class="mainImg">
            <img src="../img/test.png" alt="mainImg">
        </div>
        <div class="product_description">
            <p>Product Description</p>
        </div>
        <div class="product_price_container">
            <div class="price">
                <h2>27 000т</h2>
            </div>
            <div class="add_to_cart">
                <div href="#" class="add_to_cart_button">+</div>
            </div>
        </div>
        <div class="adding_user">
            <p>TestUser</p>
        </div>
    </main>
</template>


<style scoped>
*{
    /* border: 1px solid #000; */
}
p{
    margin: 0;
}
.products_component{
    padding: 5px;
    max-width: 230px;
    min-width: 230px;
    min-height: 305px;
    max-height: 305px;
    border-radius:15px;
    margin: 15px;
    box-shadow: 0 0px 1px #00000071;
    background:white
}
.mainImg{
    width: 100%;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 10px;
    
}
.mainImg img{
    width: 100%;
    height: 200px;
    border-radius:6px;
}

.product_price_container{
    display: flex;

}

.price{
    width: 150px;
}

.add_to_cart{
    width: 80px;
    position: relative;
}

.add_to_cart_button{
    position: absolute;
    display: block;
    margin: 0 auto;
    text-decoration: none;
    color: white;
    width: 50px;
    height: 30px;
    text-align: center;
    font-weight: 800;
    font-size: 20px;
    background-color: rgba(139, 139, 138, 0.74);
    /* padding: 2px 20px; */
    border-radius: 6px;
    left: 0;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
}

.add_to_cart_button:hover{
    width: 52px;
    height: 32px;
    background-color: rgba(33, 167, 0, 0.74);
}

.adding_user{
    font-size: 13px;
    color: lightgrey;
    background:white url(../img/User.png) no-repeat 0 3px;
    padding-left: 22px;
    display: flex;
    align-items: stretch;
}
.adding_user p{
    align-items: center;
    display: flex;
}
</style>