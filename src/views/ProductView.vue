<template>
    <main class="container product_container" id="product_container">
        <div class="row">
            <div class="bread-crumbs">
                <router-link to="/">Главная</router-link> \
                <router-link :to="{ name: 'home', hash: '#categori_'+getCategoriIndex }">{{ getProduct.categori}}</router-link> \
                <router-link :to="$route.path">{{ $route.params.title }}</router-link>
            </div>
            <div class="product_container__heartIcon">
                <a ><img  :src="favoriteCategori" alt="" @click="changeFavoriteCategori"></a>
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
                    <div class="pruduct_status" ><span class="description--status" :class="setStatusClass" style="padding: 10px 10px;">{{ getProduct.status }}</span> Article no.: {{ getProduct.id }}</div>
                    <div class="product_container-age">
                        <div class="product_age" @click="setAge" style="background-color: rgba(70, 155, 0, 0.4);">1</div>
                        <div class="product_age" @click="setAge" style="background-color:rgba(70, 155, 0, 0.6) ;">2</div>
                        <div class="product_age" @click="setAge" style="background-color:rgba(70, 155, 0, 0.8);">3</div>
                        <div class="product_age" @click="setAge" style="background-color:rgba(70, 155, 0, 1);">4</div>
                        <div class=""  style="background-color:rgb(255, 255, 255); padding-left: 20px; color: lightgrey;;">(возраст)</div>
                    </div>
                    <div>
                        <p class="adding-user">{{ getProduct.sailer }}</p>
                    </div>
                    <div class="product_price">
                        <!-- <h2 @click="addToCart">{{ Number(getProduct.price).toLocaleString("ru-RU")}} &#8376</h2> -->
                        <div class=" price--common " id="product_price--common" :class="withDiscount" >{{ Number(getCommonPrice).toLocaleString("ru-RU")}} &#8376</div>
                        <div class="price--discount" id="product_price--discount"  >
                            <div v-if="showDiscount">
                                <del>{{ Number(getProduct.price).toLocaleString("ru-RU")}} &#8376</del>
                            </div>
                        </div>
                    </div>
                    <div class="product_adding_to_cart "><button class="adding_button_to_cart green_button" @click="toogleInCart">{{ addingButtonText }}</button></div>
                </div>
            </div>
        </div> 
        <ModalMessage :message="message" v-show="showMessage"/>
    </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ModalMessage from '../components/ModalMessage.vue'

export default{
    data(){
        return{
            product:{},
            age:1,
            statusClass:"",
            message: "",
            showMessage:false,
            addingButtonText:"Добавить в корзину"
        } 
    },
    computed:{ 
        getProduct(){
            return this.$store.getters.getProduct(this.$route.params.title)
        },
        img_src(){
            if(this.getProduct.img == "" || this.getProduct.img == "noPhoto"){
                return '../src/img/noPhoto.png'
            }else{
                return '../src/img/products/'+this.getProduct.img
            }
        }, 
        getProductImgs(){
            return this.$store.getters.getProductImg(this.getProduct.id)
        },
        favoriteCategori(){
            if(this.getProduct.categori == "Нравится"){
                return  "../src/img/Heart-red.png"
            }else{
                return "../src/img/Heart.png"
            }
        },
        getCommonPrice(){
             return (this.getProduct.price-(this.getProduct.price*this.getProduct.discount))
        },
        showDiscount(){
            if(this.getProduct.discount == "0" || this.getProduct.discount == ""){
                return false
            }else{
                return true
            }
        },
        withDiscount(){
            if(this.getProduct.discount == "0" || this.getProduct.discount == ""){
                return ""
            }else{
                return "price--withDiscount"
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
        ...mapState(['categoriList']),
        ...mapGetters(['getCart']),
        getCategoriIndex(){
             let objIndex = this.categoriList.indexOf(this.getProduct.categori);
            return objIndex
        },
    },
    methods:{
        changeImg(e){
            let img = document.querySelector('DIV[class="product_main_img"]>IMG')
            let temp = e.srcElement.src
            e.srcElement.src = img.getAttribute("src")
            img.setAttribute("src",temp) 
        },
        toogleInCart(){
            let obj = this.getCart.find(p => p.id === this.getProduct.id)
            if(obj == undefined){
                this.$store.dispatch('addProductToCart', [this.getProduct, this.age])
                this.addingButtonText = "Удалить из корзины"
                this.message = "Товар \"" + this.getProduct.title + "\" добавлен в корзину" 
                this.showMessage = true
                setTimeout(()=>{this.showMessage = false}, 2000)
            }else{
                this.$store.dispatch('deleteProductFromCart', [this.getProduct, this.age])
                this.addingButtonText = "Добавить в корзину"
                this.message = "Товар \"" + this.getProduct.title + "\" удалён из корзины"  
                this.showMessage = true
                setTimeout(()=>{this.showMessage = false}, 2000)
            }
            
        },
        changeFavoriteCategori(e){
            e.preventDefault()
            this.$store.dispatch('changeFavoriteCategori', this.getProduct)
        },
        setAge(e){
            e.preventDefault()
            this.age = e.target.innerText
            e.target.classList.toggle("product_age-active")
        },
        
    },
    components:{
        ModalMessage
    }
}


</script>

<style scoped>



#product_price--common{
    font-size: 30px;
    padding: 0;
    text-align: left;
}
#product_price--discount{
    padding: 0;
    text-align: left;
}
.product_container__heartIcon{
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.product_container__heartIcon img{
    width: 30px;
    height: 30px;
    margin-right: 15px;
}

.product_container_info{
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
}

@media (min-width:320px) and (max-width:992px) {
    .product_container_info{
        justify-content: center;
    }
}

.adding-user{
    color: lightgray;
    padding: 15px;
    padding-left: 25px;
}

.adding-user::before{
    content: url(../img/User.png);
    position: relative;
    top:3px;
    margin-right:3px;
}

.product_description_container{
    padding-left: 15px;
    display: flex;
    flex-direction: column;

}

.product_description_title{
    padding-top: 15px;
}
.product_adding_to_cart{
    height: 120px;
    position: relative;
}

.product_container-age{
    display: flex;
    align-items: stretch;
}
.pruduct_status{
    color: lightgray;
    padding-bottom: 20px;
    padding-left: 15px;
}

.product_age{
    width: 30px;
    height: 30px;
    border: 1px solid #00000079;
    margin-left: 20px;
    border-radius: 5px;
    text-align: center;
}


.product_age-active{
    border: 1px solid red;
    color: red;
    font-weight: 600;
}
.product_container{
    margin-top: 50px;
}



.product_imgs_container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
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
    max-height: 400px;
    padding:0 20px ;
    display: flex;
    flex-direction: column;
    justify-content: start;
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