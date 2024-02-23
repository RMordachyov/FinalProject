import {createStore} from 'vuex'
import jsonData from '../assets/test.json'

export default createStore({
  state:{
    st_productsList: [
      {
          "id":1,
          "title": "Туя",
          "description":"Туя Алматинская(нет)",
          "price":"15000",
          "discount":"0.15",
          "isHas":false,
          "sailer":"testUser",
          "categori":"Горячее",
          "img":"1_main.jpg"
      },
      {
          "id":2,
          "title": "testTitle2",
          "description":"testDescription2",
          "price":"15000",
          "discount":"0.15",
          "isHas":true,
          "sailer":"testUser2",
          "categori":"Предложения",
          "img":""
      },
      {
        "id":3,
        "title": "testTitle3",
        "description":"testDescription3",
        "price":"150000",
        "discount":"0.15",
        "isHas":false,
        "sailer":"testUser3",
        "categori":"Основные товары",
        "img":"3_main.jpg"
    }
  ],
  st_productsImgList:[
    {
      "id":1,
      imgsPath:[
        "1_1.jpg",
        "1_2.jpg",
        "1_3.jpg",
        "1_4.jpg",
        "1_5.jpg"
      ]
    },
    {
      "id":2,
      imgsPath:[
        "2_1.jpg",
        "2_2.jpg",
        "2_3.jpg",
        "2_4.jpg",
        "2_5.jpg"
      ]
    }
  ],
  cart:[],
  st_CategoriList: ["Горячее", "Предложения", "Основные товары"]
  },
  getters:{
    g_categoriList(state){
      let outList = []
      state.st_CategoriList.forEach(categori => {
      let objCategori = {
          "categori":categori,
          "products":state.st_productsList.filter(p => p.categori === categori)
        }
      if(objCategori.products.length != 0){
        outList.push(objCategori)
      }
        
      });
      return outList
    },
    g_product: (state) => (title) => {
      return state.st_productsList.find(p => p.title === title)
    },
    g_productImg: (state) => (id) => {
      let img = state.st_productsImgList.find(p => p.id === id)
      if(img == undefined){
        img = {id:id, imgsPath:["noPhoto.png"]}
        
      }
      return img 
    },
    getProductCountInCart(state){
      console.log(state.cart.length)
      console.log(state.cart)
      return state.cart.length
    },
    getCart(state){
      return state.cart
    }
  },
  mutations:{
    AddProductToCart(state,payload){
      if(state.cart.length ==0){
        state.cart.push(payload)
      }else{
        // console.log(element)
        if(state.cart.find(e => e.id === payload.id) == undefined){
          state.cart.push(payload)
        }else{
          return alert("Вы уже добавили в корзину товар " + payload.description)
        }
      }
      
    },
    deleteProductFromCart(state,payload){
      payload.forEach(element => {
        let obj = state.cart.find(e => e.id === element.id);
        let i = state.cart.indexOf(obj);
        if(i >= 0) {
          state.cart.splice(i,1);
        }
      });
      
    }
  },
  actions:{

  },
  modules:{
    
  }
})