<template>
    <main class="container product_container">
        <div class="row">
            <!-- <b-breadcrumb class="bread_crumbs" :items="this.items">
            </b-breadcrumb> -->
                <b-breadcrumb :items="items"></b-breadcrumb>
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
                    <div class="product_description_title"><h1>{{ getProduct.description}} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam, repellendus</h1></div>
                    <div class="pruduct_status" ><span class="description--status" :class="setStatusClass" style="padding: 10px 10px;">{{ getProduct.status }}</span> Article no.: {{ getProduct.id }}</div>
                    <div class="product_container-age">
                        <div class="product_age" @click="setAge" style="background-color: rgba(70, 155, 0, 0.4);">1</div>
                        <div class="product_age" @click="setAge" style="background-color:rgba(70, 155, 0, 0.6) ;">2</div>
                        <div class="product_age" @click="setAge" style="background-color:rgba(70, 155, 0, 0.8);">3</div>
                        <div class="product_age" @click="setAge" style="background-color:rgba(70, 155, 0, 1);">4</div>
                        <div class=""  style="background-color:rgb(255, 255, 255); padding-left: 20px; color: lightgrey;;">(возраст)</div>
                    </div>
                    <div class="adding_user">
                        <p>{{ getProduct.sailer }}</p>
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
            product:{},
            age:1,
            statusClass:"",
            items:[
                {
                    text:'Главная',
                    href:'/'
                },
                {
                    text:"Test",
                    href:'#'
                },
                {
                    text:"Test2",
                    href:'#'
                },
            ]
        }
        
    },
    computed:{
        // setBreadCrumbs(){
        //     return this.items =[
        //         {
        //             text:'Главная',
        //             href:'/'
        //         },
        //         {
        //             text:this.getProduct.categori,
        //             href:'#'
        //         },
        //         {
        //             text:this.getProduct.description,
        //             href:'#'
        //         },
        //     ]
        // },
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
        getProductImgs(){
            return this.$store.getters.g_productImg(this.getProduct.id)
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
            
            switch (this.getProduct.status) {
                case "В наличии":
                    this.statusClass = "description--status-in-store"
                    break;
                case "Нет на складе":
                    this.statusClass = "description--status-no-found"   
                    break;
                default:
                    this.statusClass = "description--status-by-way"  
                    break;
            }
            return this.statusClass
        },
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
            this.$store.commit('AddProductToCart', [this.getProduct, this.age])
        },
        changeFavoriteCategori(e){
            e.preventDefault()
            this.$store.commit('changeFavoriteCategori', this.getProduct)
        },
        setAge(e){
            e.preventDefault()
            this.age = e.target.innerText
            e.target.classList.toggle("product_age-active")
        },
        
    }
}


</script>




<style scoped>
*{
    /* border:1px solid #000; */
}


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
    /* justify-content: flex-start; */
    align-items: stretch;
    flex-wrap: wrap;
}

@media (min-width:320px) and (max-width:992px) {
    .product_container_info{
        justify-content: center;
    }
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

.bread_crumbs{
    width: 100%;
    color: lightgray;
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
    .product_imgs_container{
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