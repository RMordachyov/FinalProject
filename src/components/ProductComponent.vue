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
                <a href="#" class="card__add" @click="addToCart">+</a>
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
            status:"",
            statusClass:""
        }
    },
    computed:{
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
        addToCart(e){
            e.preventDefault()
            this.$store.commit('AddProductToCart', [this.product,1])
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
    background:white url(../img/User.png) no-repeat 0 3px;
    padding-left: 22px;
    text-align: left;
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
}

.card__add:hover{
    width: 52px;
    height: 32px;
    background-color: rgba(33, 167, 0, 0.74);
}

</style>