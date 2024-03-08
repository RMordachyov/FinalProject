<template>
    <main class="container products_component">
        <div class="card">
            <div class="card__top">
            <router-link class="card__image" :to="`/product/${product.title}`">
                <img :src="img_src" :alt="product.img">
            </router-link>
        </div>
        <div class="card__content">
            <div class="card__description">
                <div class="card__description--text">
                    {{ product.title}}
                </div>
                <div :class="setStatusClass" class="description--status ">
                    {{ product.status }}
                </div>
            </div>
        </div>
        <div class= "price--discount" >
            <div v-if="showDiscount">
                 <del>
                    {{ Number(product.price).toLocaleString("ru-RU") }} &#8376
                </del>
            </div>
        </div>
        <div class="card__bottom">
            <div class="card__prices">
                
                <div class="price--common" :class="withDiscount">{{ Number(getCommonPrice).toLocaleString("ru-RU") }} &#8376</div>
                <a href="#" class="card__adding-user">{{ product.sailer }}</a>
            </div>
            <div class="card__bottom--add-button">
                <button href="#" class="card__add" :class="setAddingButtonStatus[0]" @click="toogleInCart">{{ setAddingButtonStatus[1] }}  </button>
            </div>
        </div>
        </div>
        <ModalMessage :message="message" v-show="showMessage"/>
    </main>
</template>

<script>
import {mapGetters } from 'vuex'
import ModalMessage from '../components/ModalMessage.vue'
export default{
    data(){
        return{
            status:"",
            statusClass:"",
            message: "",
            showMessage:false
        }
    },
    computed:{
        ...mapGetters(['getCart']),
        setAddingButtonStatus(){
            let obj = this.getCart.find(p => p.id === this.product.id)
            if(obj == undefined){
                return ["","+"]
            }else{
                return ["card__add_green","✔"]
            }
        },
        img_src(){
            if(this.product.img == "" || this.product.img == "noPhoto"){
                return 'src/img/noPhoto.png'
            }else{
                return 'src/img/products/'+this.product.img
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
             return this.product.price-(this.product.price*this.product.discount)
        },
        showDiscount(){
            if(this.product.discount == "0" || this.product.discount == ""){
                return false
            }else{
                return true
            }
        },
        withDiscount(){
            if(this.product.discount == "0" || this.product.discount == ""){
                return ""
            }else{
                return "price--withDiscount"
            }
        }
    },
    props:[
        'product'
    ],
    methods:{
        toogleInCart(){
            let obj = this.getCart.find(p => p.id === this.product.id)
            if(obj == undefined){
                this.$store.dispatch('addProductToCart', [this.product,1])
                this.message = "Товар \"" + this.product.title + "\" добавлен в корзину" 
                this.showMessage = true
                setTimeout(()=>{this.showMessage = false}, 2000)
                
            }else{
                this.$store.dispatch('deleteProductFromCart', [this.product])
                this.message = "Товар \"" + this.product.title + "\" удалён из корзины"  
                this.showMessage = true
                setTimeout(()=>{this.showMessage = false}, 2000)
            }
            
            
        }
        
    },
    components:{
        ModalMessage
    }
}
</script>

<style scoped>

.products_component{
    padding: 0px;
    width: 230px;
    min-height: 305px;
    border-radius:15px;
    margin: 15px;
    box-shadow: 0 1px 3px #00000071;
    background:white;
}
.card{
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 0px ;    
    border-radius: 10px;
}
.card__image img{
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0px;
    margin-bottom: 10px;
}
.products_component:hover {
  box-shadow: 3px 8px 10px #00000071;
}
.card__content{
    padding-left: 15px;
}

.card__description--text{
    font-size: 21px;
    font-weight: 500;
    padding: 5px;
}
.card__description--status{
    max-width: 100px;
    text-align: center;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 400;
    color: rgb(119, 119, 119);
    
}



.card__bottom{
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
}

.card__prices{
    min-width: 150px;
}

.card__prices div{
    min-width: 150px;
    text-align: right;
}
.card__adding-user{
    font-size: 13px;
    color: lightgrey;
    padding-left: 5px;
    text-align: left;
}

.card__adding-user::before{
    content: url(../img/User.png);
    position: relative;
    top:3px;
    margin-right:3px;
}

.card__bottom--add-button{
    padding: 10px;
}

.card__add{
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
    border-radius: 6px;
    cursor: pointer;
    margin-top: -5px;
    border: 0px;
}

.card__add:hover{
    width: 52px;
    height: 32px;
    background-color: rgba(33, 167, 0, 0.74);
}

.card__add_green{
    background-color: rgba(33, 167, 0, 0.74);  
}

</style>