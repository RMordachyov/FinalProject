<template>
    <main class="container categori">
            <h3>{{ categori.categori }}</h3>
            <ProductsComponent v-for="(product, index) in categori.products" :product="product" :key="index"/>
        
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
.categori{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    padding: 0px;
    min-height: 300px;
    margin-top: 20px;
    margin-bottom: 30px;
}

.categori h3{
    padding-left: 30px;
    width: 100%;
}

@media (min-width:992px) {
    .categori{
        justify-content: flex-start;
    }
}

@media (max-width:575px) {
    .categori{
        justify-content: center;
    }
}
</style>