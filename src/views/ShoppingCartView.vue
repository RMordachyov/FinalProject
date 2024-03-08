<template>
    <main class="shopping-cart container">
        <div class="row">
            <div class="bread-crumbs col-12">
                <router-link to="/">Главная</router-link> \
                <router-link :to="$route.path">Моя корзина</router-link>
            </div>
            <div class="products-in-cart col-lg-9">
                <h3>Моя корзина</h3>
                <div class="product-head-list" v-if="!showNoProduct">
                    <input type="checkbox" name="selectAll" id="selectAllProducts" @change="selectAllProducts" :checked="changeChecked">
                    <label for="selectAll">Выбрать всё</label>
                    <button href="#" class="delete-button" @click="deleteProductFromCart">Удалить</button>
                </div>
                <div class="product-list">
                    <ProductCartComponent v-for="product in getCart" :product="product" :changeChecked="changeChecked"  @setSelectedOptions="setSelectedOptions" />
                <p style="font-size: 19px;" v-if="showNoProduct">У вас пока нет товаров в корзине... Исправить это можно тут: <router-link :to="{path:'/', hash:'#categori_0'}" >Каталог товаров</router-link></p>
                </div>
            </div>
            <div class="order-detail col-lg-3">
                <div class="order-border-price">
                    <h3>Детали заказа</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Покупки</td>
                                <td>{{Number(getTotalOrderPrice.Order).toLocaleString("ru-RU")}} &#8376</td>
                            </tr>
                            <tr>
                                <td>Доставка</td>
                                <td>{{Number(getTotalOrderPrice.Delivery).toLocaleString("ru-RU")}} &#8376</td>
                            </tr>
                            <tr>
                                <td>Скидка</td>
                                <td>{{Number(getTotalOrderPrice.Discount).toLocaleString("ru-RU")}} &#8376</td>
                            </tr>
                            <tr>
                                <td><b>Всего</b></td>
                                <td><b>{{Number(getTotalOrderPrice.Total).toLocaleString("ru-RU")}} &#8376</b></td>
                            </tr>
                        </tbody>
                    </table>
                    <button href="#" class="send-order-button green_button" @click="getOrder">Оформить заказ</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState, mapGetters} from 'vuex'
import ProductCartComponent from '../components/ProductCartComponent.vue'
export default{
    data(){
        return{
            changeChecked:false,
            selectedOptions:[],
        }
    },
    computed:{
        
        ...mapGetters(['getCart']),
        ...mapGetters(['getTotalOrderPrice']),
        ...mapState(['categoriList']),
        getCategoriIndex(){
             let objIndex = this.st_CategoriList.indexOf(this.getProduct.categori);
            return objIndex-1
        },
        showNoProduct(){
            return this.getCart[0] == undefined
        },
    },
    methods:{
        setSelectedOptions(data){
            if(data[1]){
                this.selectedOptions.push(data[0])
            }else{
                let obj = this.selectedOptions.find(p => p == data[0]);
                let objIndex = this.selectedOptions.indexOf(obj);
                if(objIndex > -10){
                    this.selectedOptions.splice(objIndex,1);
                }
            }
        },
        selectAllProducts(){
            if(this.changeChecked){
                this.changeChecked = false
                this.selectedOptions.length=0;
            }else{
                this.changeChecked = true
                this.getCart.forEach(obj => {
                    this.selectedOptions.push(obj.id)
                });
            }
            if(this.showDeleteButton){
                this.showDeleteButton = false
            }else{
                this.showDeleteButton = true
            }
        },

        deleteProductFromCart(e){
            this.$store.commit('deleteProductFromCart', this.selectedOptions)
            this.changeChecked = true
            this.changeChecked = false
            this.selectedOptions.length=0
        },
        getOrder(e){
            if(this.showNoProduct){
                alert("Уупс! Вы не добавили не одного товара! Это можно поправить перейдя в каталог товаров!")
            }else{
                alert("Заказ оформлен!! Общая сумма к оплате "+Number(this.getTotalOrderPrice.Total).toLocaleString("ru-RU"))
            }
            this.selectAllProducts()
            this.deleteProductFromCart(this.selectedOptions)
        }
    },
    components:{
        ProductCartComponent
    }
}
</script>


<style scoped>

.send-order-button{
    background-color:  rgba(33, 167, 0, 0.74);
    padding: 8px 30px;
    color: white;  
    border-radius: 10px;
    text-decoration: none;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer; 
    border: 0px;
}

.order-detail{
    padding: 40px 20px;
    text-align: center;
}

.product-list{
    margin-top: 30px;
    padding: 20px;
}

.order-border-price{
    min-width: 290px;
    height: 320px;
    background-color: white;
    border-radius: 10px;
    padding: 30px 15px;
    font-size: 20px;
}

.order-border-price table{
    margin-top: 20px;
    margin-bottom: 30px;
    width: 100%;
}

.order-border-price table tr>td:first-child{
    text-align: left;
}

.shopping-cart{
    border-radius: 10px;
    min-height: 600px;
}

.product-head-list{
    border-radius: 10px;
    position: relative;
    height: 60px;
    background-color: white;
}

.product-head-list label{
    font-size: 20px;
    padding-left: 30px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
}

#selectAllProducts{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 10;
}
.delete-button{
    position: absolute;
    padding: 5px 10px;
    background-color: lightgray;
    border-radius: 10px;
    text-decoration: none;
    color:#000;
    font-weight: 600;
    right: 1%;
    top: 50%;
    transform: translate(0, -50%);
    border: 0px;
}

.delete-button:hover{
    box-shadow: 0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em  rgb(73, 73, 73);
}

.delete-button:active{
    box-shadow: 0 0 0 60px rgba(0,0,0,.05) inset;
}
</style>