<template>
    <main class="shopping-cart container">
        <div class="row">
            <div class="bredcrumbs col-12">
               {{$route.path}}
            </div>
            <div class="products-in-cart col-lg-9">
                <h2>Моя корзина</h2>
                <div class="product-head-list">
                    <input type="checkbox" name="selectAll" id="selectAllProducts" @change="selectAllProducts">
                    <label for="selectAll">Выбрать всё</label>
                    <a href="#" class="delete-button" @click="deleteProductFromCart">Удалить</a>
                </div>
                <div class="product-list">
                    <ProductCartComponent v-for="product in getCart" :product="product"/>
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
                    <a href="#" class="send-order-button">Оформить заказ</a>
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
            selectedForDelete: []
        }
    },
    computed:{
        ...mapGetters(['getCart']),
        ...mapGetters(['getTotalOrderPrice'])
    },
    methods:{
        selectAllProducts(){
            let allCheckboxs = document.querySelectorAll("INPUT[name^='selectProduct']")
            allCheckboxs.forEach(e => {
                 e.checked = !e.checked;   
            });
        },
        deleteProductFromCart(e){
            e.preventDefault()
            let selectAllProducts = document.getElementById('selectAllProducts')
            if(selectAllProducts.checked == true){
                let temp = JSON.parse(JSON.stringify(this.getCart))
                this.$store.commit('deleteProductFromCart', temp)
                selectAllProducts.checked = false
            }else{
                selectAllProducts.checked = false
                return 0
            }
            
        },
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
    font-size: 23px;
    font-weight: 600;
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
    background-color: mintcream;
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