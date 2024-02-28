<template>
    <main class="shopping-cart container">
        <div class="row">
            <div class="bread-crumbs col-12">
                <router-link to="/">Главная</router-link> \
                <router-link :to="$route.path">Моя корзина</router-link>
            </div>
            <div class="products-in-cart col-lg-9">
                <h3>Моя корзина</h3>
                <div class="product-head-list">
                    <input type="checkbox" name="selectAll" id="selectAllProducts" @change="selectAllProducts">
                    <label for="selectAll">Выбрать всё</label>
                    <a href="#" class="delete-button" @click="deleteProductFromCart">Удалить</a>
                </div>
                <div class="product-list">
                    <ProductCartComponent v-for="product in getCart" :product="product"/>
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
                    <a href="#" class="send-order-button green-button" @click="getOrder">Оформить заказ</a>
                </div>
            </div>
        </div>
    
    </main>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import ProductCartComponent from '../components/ProductCartComponent.vue'
export default{
    data(){
        return{
            selectedForDelete: [],
            chcked:true
        }
    },
    computed:{
        ...mapGetters(['getCart']),
        ...mapGetters(['getTotalOrderPrice']),
        ...mapState(['st_CategoriList']),
        getCategoriIndex(){
             let objIndex = this.st_CategoriList.indexOf(this.getProduct.categori);
            return objIndex-1
        },
        showNoProduct(){
            if(this.getCart[0] == undefined){
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        selectAllProducts(){
            let allCheckboxs = document.querySelectorAll("INPUT[name^='selectProduct']")
            allCheckboxs.forEach(e => {
                 e.checked = this.chcked;   
            });
            if(this.chcked){
                this.chcked = false
            }else{
                this.chcked = true
            }
            if(this.showDeleteButton){
                this.showDeleteButton = false
            }else{
                this.showDeleteButton = true
            }
        },
        deleteProductFromCart(e){
            if(e == undefined){

            }else{
                e.preventDefault()
            }
            let allCheckboxs = document.querySelectorAll("INPUT[name^='selectProduct']")
            allCheckboxs.forEach(el => {
                if(el.checked){
                    let id = el.getAttribute("name").split("-")[1]
                    let obj = this.getCart.find(p => p.id == id)
                    this.$store.commit('deleteProductFromCart', [obj])
                    el.checked = false
                }
            });
            selectAllProducts.checked = false
        },
        getOrder(e){
            if(this.showNoProduct){
                alert("Уупс! Вы не добавили не одного товара! Это можно поправить перейдя в каталог товаров!")
            }else{
                alert("Заказ оформлен!! Общая сумма к оплате "+Number(this.getTotalOrderPrice.Total).toLocaleString("ru-RU"))
            }
            
            let selectAllProducts = document.getElementById('selectAllProducts')
            this.selectAllProducts()
            this.deleteProductFromCart()
        }
    },
    components:{
        ProductCartComponent
    }
}
</script>


<style scoped>
*, div{
    /* border: 1px solid #000; */
}
.send-order-button{
    background-color:  rgba(33, 167, 0, 0.74);
    padding: 8px 30px;
    color: white;
   
    border-radius: 10px;
    text-decoration: none;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
    
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
    /* background-color: mintcream; */
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
    left: 5%;
    top: 50%;
    transform: translate(0, -50%);
}

#selectAllProducts{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    position: absolute;
    left: 5%;
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
}
</style>