<template>
    <main class="container product_container">
        <div class="row">
            <div class="bread_crumbs">
                test
            </div>
            <div class="product_container_info">
                <div class="product_imgs_container col-xl-6 col-lg-7 col-md-7">
                    <div class="product_main_img">
                        <img :src="img_src" alt="">
                    </div>
                    <div class="product_next_imgs">
                        <div class="product_next_img" v-for="img in getProductImgs.imgsPath">
                            <img :src="`../src/img/products/${img}`" alt="" @click="changeImg">
                        </div>
                        
                    </div>
                </div>
                <div class="product_description_container col-xl-6 col-lg-5 col-md-5">
                    <div class="product_description_title"><h1>{{ getProduct.description}}</h1></div>
                    <div class="pruduct_status">{{ isHas }} Article no.: {{ getProduct.id }}</div>
                    <div class="product_colors">
                        <div class="product_color" style="background-color: rgba(70, 155, 0, 0.4);">1</div>
                        <div class="product_color" style="background-color:rgba(70, 155, 0, 0.6) ;">2</div>
                        <div class="product_color" style="background-color:rgba(70, 155, 0, 0.8);">3</div>
                        <div class="product_color" style="background-color:rgba(70, 155, 0, 1);">4</div>
                    </div>
                    <div class="adding_user">
                        <p>{{ getProduct.sailer }}</p>
                    </div>
                    <div class="product_price">
                        <h2 @click="addToCart">{{ Number(getProduct.price).toLocaleString("ru-RU")}} &#8376</h2>
                    </div>
                    <div class="product_ading_to_cart"><a  @click="addToCart">Добавить в корзину</a></div>
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
            product:{}
        }
        
    },
    computed:{
        getProduct(){
            return this.$store.getters.g_product(this.$route.params.title)
        },
        img_src(){
            if(this.getProduct.img == "" || this.getProduct.img == "noPhoto"){
                return '../src/img/noPhoto.png'
            }else{
                return '../src/img/products/'+this.getProduct.img
            }
        }, 
        isHas(){
            if(this.getProduct.isHas){
                return 'В наличии'
            }else{
                return 'Нет на складе'
            }
        },
        getProductImgs(){
            // console.log(this.$store.getters.g_productImg(this.getProduct.id))
            return this.$store.getters.g_productImg(this.getProduct.id)
        }  
    },
    methods:{
        changeImg(e){
            let img = document.querySelector('DIV[class="product_main_img"]>IMG')
            let temp = e.srcElement.src
            e.srcElement.src = img.getAttribute("src")
            img.setAttribute("src",temp) 
        },
        addToCart(e){
            e.preventDefault()
            console.log("prod view")
            this.$store.commit('AddProductToCart', this.getProduct)
        }
    }
}

</script>




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
    text-align: center;
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
    border-radius: 20px;
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