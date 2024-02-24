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
        "categori":"Предложения",
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
  st_CategoriList: ["Нравиться", "Горячее", "Предложения", "Основные товары"]
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
      // console.log(state.cart.length)
      // console.log(state.cart)
      return state.cart.length
    },
    getCart(state){
      return state.cart
    },
    getTotalOrderPrice(state){
      let TotalOrderPrice = {
        Order:0,
        Delivery:0,
        Discount:0,
        Total:0
      }
      let price = 0
      let discount = 0
      let total = 0
      let delivery=0

      state.cart.forEach(product => {
        price += (product.data.price)*product.count
        discount += (product.data.price*product.data.discount)*product.count
        total += price
      });
      if((state.cart.find(p => p.count >= 3) == undefined) || state.cart.length >= 3){
        delivery = total*0.05
      }else{
        delivery = 0
      }
      total+=delivery

      TotalOrderPrice.Order = price
      TotalOrderPrice.Discount = discount
      TotalOrderPrice.Delivery = delivery
      TotalOrderPrice.Total = total

      return TotalOrderPrice
    }
    
  },
  mutations:{
    AddProductToCart(state,payload){
      
      let newObj = {
        id:payload.id,
        count:1,
        data:payload
      }
      if(state.cart.length ==0){
        state.cart.push(newObj)
      }else{
        if(state.cart.find(e => e.id === payload.id) == undefined){
          state.cart.push(newObj)
        }else{
          return alert("Вы уже добавили в корзину товар " + newObj.data.description)
        }
      }
      
    },
    deleteProductFromCart(state,payload){
      payload.forEach(element => {
        let obj = state.cart.find(p => p.id == element.id);
        let objIndex = state.cart.indexOf(obj);
        if(objIndex > -10){
          state.cart.splice(objIndex,1);
        }
      });
      
    },
    incrementProductCount(state,payload){
      let obj = state.cart.find(p => p.id === payload.id)
      obj.count++
    },
    decreaseProductCount(state,payload){
      let obj = state.cart.find(p => p.id === payload.id)
      if(obj.count != 1){
        obj.count--
      }else{
        return 0
      }
      
    },
    changeFavoriteCategori(state,payload){
      let obj = state.st_productsList.find(p => p.id == payload.id);
      if(obj.categori != "Нравиться"){
        obj.oldCategori = obj.categori
        obj.categori = "Нравиться"
      }else{
        if(obj.oldCategori == "" ||obj.oldCategori == undefined){
          obj.categori = "Предложения"
        }else{
          obj.categori = obj.oldCategori
        }
      }
      console.log(obj)
    }
  },
  actions:{

  },
  modules:{
    
  }
})