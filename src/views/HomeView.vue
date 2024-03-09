<template>
  
  <main class="HomeView" id="product-prise">
    
    <div class="fluid-container banner">
      <Banner />
    </div>
    <CategoriProductsComponent v-for="(categori,index) in getCategoriList" :id="`categori_${index}`" :categori="categori"/>
    
  </main>
</template>


<script >
// import jsonData from '../assets/test.json'
import { mapState, mapGetters } from 'vuex'
import CategoriProductsComponent from '../components/CategoriProductsComponent.vue'
import Banner from '../components/Banner.vue'

export default{
  data(){
    return{
      exData: {},
      categori:{},
    }
  },
  computed:{
    ...mapState(['categoriList']),
    ...mapGetters(['getCategoriList']),
    chDate(){
     return this.exData = this.$store.state.st_productsList.products[0]
    }
  },
  methods:{
    selectedOptions1(data){
      console.log(data);
      this.selectedOptions.push(data);
    }
  },
  components:{
    CategoriProductsComponent,
    Banner,
  }
}
</script>

<style scoped>
.HomeView{
  background-color: #FAFAFF;
  min-height: 550px;
}

.banner{
  position: relative;
    height: 400px;
    border-radius: 5px;
    background: url('../img/gor.jpg') no-repeat 0px 25%;
    background-size: 100%;
    padding: 0px;
    background-position: center
}


@media (max-width:650px) {
    .banner{
        height: 397px;
        background-size: 200%;
    }
    .banner_buttons_container{
        padding: 0px;
    }
}
</style>