<template>
  <main class="HomeView">
    <CategoriProductsComponent />
    
  </main>
</template>


<script >
// import jsonData from '../assets/test.json'
import { mapState, mapMutations, mapActions } from 'vuex'
import CategoriProductsComponent from '../components/CategoriProductsComponent.vue'

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
    CategoriProductsComponent
  }
}
</script>

<style scoped>
.HomeView{
  background-color: #FAFAFF;
  min-height: 550px;
  padding: 15px 0px;
}
</style>