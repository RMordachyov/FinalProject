<template>
    <main class="container categori_products_component">
        <div class="categori_products_component">
            <h3>{{ categori.categori }}</h3>
            <ProductsComponent v-for="(product, index) in categori.products" :product="product" :key="index"/>
        </div>
    </main>
</template>

<script>
import ProductsComponent from '../components/ProductComponent.vue'
export default{
    data(){
        return{
           
        }
    },
    computed:{
    },
    props:[
        'categori'
    ],
    components:{
        ProductsComponent
    }
}
</script>

<style scoped>
.categori_products_component{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    padding: 0px;
    min-height: 300px;
    margin-top: 20px;
    margin-bottom: 30px;
}

.categori_products_component h3{
    padding-left: 30px;
    width: 100%;
}

@media (min-width:992px) {
    .categori_products_component{
        justify-content: flex-start;
    }
}

@media (max-width:575px) {
    .categori_products_component{
        justify-content: center;
    }
}
</style>