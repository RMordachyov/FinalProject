<template>
  <main class="HomeView">
    <div class="fluid-container banner">
    <banner />
</div>
    <CategoriProductsComponent />
    
  </main>
</template>


<script >
// import jsonData from '../assets/test.json'
import { mapState, mapMutations, mapActions } from 'vuex'
import CategoriProductsComponent from '../components/CategoriProductsComponent.vue'
import banner from '../components/Banner.vue'

export default{
  data(){
    return{
      exData: {}
    }
    
  },
  computed:{
    chDate(){
     return this.exData = this.$store.state.productsList.products[0]
    }
  },
  methods:{
    test(){
      console.log(jsonData.products[0])
    }
  },
  components:{
    CategoriProductsComponent,banner
  }
}
</script>

<style scoped>
.HomeView{
  background-color: #FAFAFF;
  min-height: 550px;
}

.banner{
    height: 100%;
    border: 1px solid #0000004d;
    border-radius: 5px;
    /* box-shadow: inset 0px 0px 5px 30px rgb(255, 253, 253); */
    background: url('../img/gor.jpg') no-repeat 0px 25%;
    background-size: 100%;
    padding: 0px;
}
</style>