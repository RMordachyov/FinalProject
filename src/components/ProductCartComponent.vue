<template>
    <main class="cart-product-card fluid-container">
        <slot></slot>
        <div class="cart-product-card__image">
            <router-link class="card__image" :to="`/product/${product.data.title}`">
                <img :src="img_src" alt="">
            </router-link>
            
        </div>
        <div class="cart-product-card__content">
            <div class="content__description">
                <router-link class="card__image" :to="`/product/${product.data.title}`">
                    <h5>{{ product.data.description }} </h5>
                </router-link>
                
            </div>
            <div class="content__status">
                <div class="description--status" :class="setStatusClass">{{ product.data.status }}</div>
            </div>
            <div class="content__age">
                <div class="content__age--color-pin">{{ product.age }}</div>
                <span> год</span>
            </div>
            <div class="content__adding-user">
                <div class="adding-user" style=" font-size: 17px;">{{ product.data.sailer }}</div>
            </div>
        </div>
        <div class="cart-product-card__tools">
            <div class="cart-product-card__tools--price">
                <div class="price--common" :class="withDiscount" style="padding: 0; text-align: right;">{{ Number(getCommonPrice).toLocaleString("ru-RU")}} &#8376</div>
                <div class="price--discount" style="text-align: right;" >
                    <div v-if="showDiscount">
                        <del>{{ Number(product.data.price*product.count).toLocaleString("ru-RU")}} &#8376</del>
                    </div>
                </div>
                
            </div>
            <div class="cart-product-card__tools--change">
                <img  :src="favoriteCategori" alt="" @click="changeFavoriteCategori">
                <img src="../img/Frame 825.png" alt="" @click="deleteProductFromCart">
            </div>
            <div class="cart-product-card__tools--count">
                
                <button href="#" @click="decreaseProductCount">-</button>
                <button href="#">{{ product.count }}</button>
                <button href="#" @click="incrementProductCount">+</button>

                
            </div>
        </div>
    </main>
</template>

<script>
export default{
    data(){
        return{
            heartImgPath:"",
            statusClass:"",
        }
    },
    props:[
        'product','changeChecked'
    ],
        
    computed:{
        favoriteCategori(){
            if(this.product.data.categori == "Нравится"){
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
        setStatusClass(){
            switch (this.product.status) {
                case "В наличии":
                    return "description--status-in-store";
                case "Нет на складе":
                    return "description--status-no-found";
                default:
                    return "description--status-by-way";
            }
            
        },
        getCommonPrice(){
             return (this.product.data.price-(this.product.data.price*this.product.data.discount))*this.product.count
        },
        showDiscount(){
            if(this.product.data.discount == "0" || this.product.data.discount == ""){
                return false
            }else{
                return true
            }
        },
        withDiscount(){
            if(this.product.data.discount == "0" || this.product.data.discount == ""){
                return ""
            }else{
                return "price--withDiscount"
            }
        }
    },
    
    methods:{
        deleteProductFromCart(e){
            e.preventDefault()
            this.$store.dispatch('deleteProductFromCart', [this.product.data.id])
        },
        incrementProductCount(e){
            e.preventDefault()
            this.$store.dispatch('incrementProductCount', this.product)
        },
        decreaseProductCount(e){
            e.preventDefault()
            this.$store.dispatch('decreaseProductCount', this.product)
        },
        changeFavoriteCategori(e){
            e.preventDefault()
            this.$store.dispatch('changeFavoriteCategori', this.product)
        }
    },
    components:{
       
    }
    
}
</script>

<style scoped>

.cart-product-card{
    position: relative;
    height: 100%;
    background-color: white;
    border-radius: 15px;
    margin-top: 20px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    box-shadow: 0 1px 3px #00000071;
}


.cart-product-card__image{
    min-width: 200px;
    min-height: 200px;
    max-width: 200px;
    max-height: 200px;
    border-radius: 15px;
    margin-left: 10px;
    margin-right: 10px
}

.cart-product-card__tools{
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
}


.cart-product-card__content{
        max-width: 400px;
    }

@media (min-width:320px) and (max-width:512px) {
    .cart-product-card{
        justify-content: center;
        
    }
    .cart-product-card__content{
        min-width: 220px;
    }
    .cart-product-card__select{
    position: absolute;
    left: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
}
}

.cart-product-card__select input{
    width: 15px;
    height: 15px;
}

.cart-product-card__image img{
    border-radius: 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.content__description a{
    padding:5px; 
    text-decoration: none;
    color: rgb(63, 63, 63);
}
.content__status{
    padding:5px;
}
.content__age{
    display: flex;
    flex-direction: row;
    padding: 5px 0;
}

.content__adding-user{
    padding: 5px;
}

.content__age--color-pin{
    width: 25px;
    height: 25px;
    margin: 0 10px;
    border: 0.1px solid #00000079;
    background-color: rgba(70, 155, 0, 0.4);
    border-radius: 5px;
    text-align: center;
}



.cart-product-card__tools--price{
    text-align: right;
    padding: 15px;
}

.cart-product-card__tools--change{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.cart-product-card__tools--change img{
    margin-right: 15px;
    cursor: pointer;
}
.cart-product-card__tools--count{
    height: 70px;
    padding: 10px;
    text-align: right;
}
.cart-product-card__tools--count button{
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    background-color: rgba(128, 128, 128, 0.295);
    border-radius: 5px;
    margin: 1px;
    color: white;
    border: 0px;
    font-weight: 600;
    font-size: 18px;
    text-shadow: 0 0px 2px #000;
}

.cart-product-card__tools--count button:hover{
    text-shadow: 0 0px 1px #000;
    font-size: 19px;
}
</style>