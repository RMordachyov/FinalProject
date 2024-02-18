<template>
  <main>
    <button @click="test">click</button>
    {{ chDate }}
  </main>
</template>


<script >
// import jsonData from '../assets/test.json'
import { mapState, mapMutations, mapActions } from 'vuex'

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
  }
}
</script>