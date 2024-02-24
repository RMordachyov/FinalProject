<template>
    <main class="product-cart-component fluid-container">
        <div class="row">
            <div class="product-cart-description col-lg-9">
            <input type="checkbox" :name="`selectProduct-${product.id}`" class="selectProduct">
            <div class="product-cart-img">
                <img :src="img_src" alt="">
            </div>
            <div class="product-cart-description-info">
                <div class="product-cart-description-title"><h5>{{ product.data.description }}</h5></div>
                <div class="product-cart-status"><span>{{ isHas }}</span></div>
                <div class="product-cart-color">
                    <div class="product-cart-color-pin"></div>
                    <span>Зелёная</span>
                </div>
                <div class="adding_user product-cart-adding-user">
                    {{ product.data.sailer }}
                </div>
            </div>
        </div>
        <div class="product-cart-price  col-lg-3">
            <div class="product-cart-actions">
                <a ><img  :src="favoriteCategori" alt="" @click="changeFavoriteCategori"></a>
                <a href="#" @click="deleteProductFromCart"><img src="../img/Frame 825.png" alt=""></a>
            </div>
            <div class="product-cart-price-total">
                <h4>{{ Number(product.data.price*product.count).toLocaleString("ru-RU")}} &#8376</h4>
                <h5><del>{{ (Number(product.data.price*product.count)+((product.data.price*product.data.discount)*product.count)).toLocaleString("ru-RU")}} &#8376</del></h5>
            </div>
            <div class="product-cart-price-count">
                
                <a href="#" @click="decreaseProductCount">-</a>
                <a href="#">{{ product.count }}</a>
                <a href="#" @click="incrementProductCount">+</a>
            </div>
        </div>
        </div>
    </main>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default{
    data(){
        return{
            heartImgPath:""
        }
    },
    computed:{
        favoriteCategori(){
            if(this.product.data.categori == "Нравиться"){
                return  "../src/img/Heart-red.png"
            }else{
                return "../src/img/Heart.png"
            }
        },
        img_src(){
            if(this.product.data.img == "" || this.product.data.img == "noPhoto"){
                return 'src/img/noPhoto.png'
            }else{
                return 'src/img/products/'+this.product.data.img
            }
        }, 
        isHas(){
            if(this.product.data.isHas){
                return 'В наличии'
            }else{
                return 'Нет на складе'
            }
        }
    },
    props:[
        'product'
    ],
    methods:{
        deleteProductFromCart(e){
            e.preventDefault()
            this.$store.commit('deleteProductFromCart', [this.product])
        },
        incrementProductCount(e){
            e.preventDefault()
            this.$store.commit('incrementProductCount', this.product)
        },
        decreaseProductCount(e){
            e.preventDefault()
            this.$store.commit('decreaseProductCount', this.product)
        },
        changeFavoriteCategori(e){
            e.preventDefault()
            this.$store.commit('changeFavoriteCategori', this.product)
        }
    },
    components:{
       
    }
    
}
</script>

<style scoped>
*{
    /* border: 1px solid #000; */
}
.product-cart-actions{
    margin-bottom: 15px;
}
.product-cart-actions a:first-child{
    margin-right: 20px;
}
.product-cart-price {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 10px 20px;
    text-align: right;
}
.product-cart-price-total{
    padding: 5px;
    text-align: right;
}
.product-cart-price-count a{
   
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    background-color: rgba(128, 128, 128, 0.295);
    border-radius: 5px;
    margin: 1px;
    color: white;
    font-weight: 600;
}
.product-cart-status{
    padding: 10px 0;
}
.product-cart-status span{
    padding: 3px 10px;
    background-color: rgba(0, 128, 0, 0.555);
    border-radius: 5px;
}
.product-cart-description-title{
    word-wrap:break-word;
    overflow: hidden;
}
.product-cart-color{
    display: flex;
    align-items: stretch;
}
.product-cart-color span{
    margin-top: -2px;
    padding-left: 10px;
}
.product-cart-color-pin{
    width: 20px;
    height: 20px;
    background-color: lightblue;
    border-radius: 3px;
}
.product-cart-description{
    display: flex;
    flex-direction: row;
    padding:20px;
}
.product-cart-component{
    height: 100%;
    background-color: white;
    border-radius: 15px;
    margin-top: 10px;
    
}
.selectProduct{
    width: 20px;
    height: 20px;
}
.product-cart-img{
    min-width: 150px;
    min-height: 150px;
    max-width: 150px;
    max-height: 150px;
    border-radius: 15px;
    margin-left: 10px;
    margin-right: 10px
}

.product-cart-img img{
    border-radius: 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;

}
</style>