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
          "status":"В наличии",
          "sailer":"testUser",
          "categori":"Нравится",
          "img":"1_main.jpg"
      },
      {
          "id":2,
          "title": "Некий товар",
          "description":"Описание некого товара",
          "price":"15000",
          "discount":"0.15",
          "status":"Нет на складе",
          "sailer":"testUser2",
          "categori":"Предложения",
          "img":""
      },
      {
        "id":3,
        "title": "Голубая ель",
        "description":"Голубая ель",
        "price":"150000",
        "discount":"0",
        "status":"В пути",
        "sailer":"testUser3",
        "categori":"Основные",
        "img":"3_main.jpg"
    },
    {
      "id":4,
      "title": "Кедр",
      "description":"Кедр Сибирский",
      "price":"15000",
      "discount":"0.50",
      "status":"Нет на складе",
      "sailer":"testUser4",
      "categori":"Горячее",
      "img":"4_main.jpg"
    },
    {
      "id":5,
      "title": "Вишня",
      "description":"Просто вишня",
      "price":"30000",
      "discount":"",
      "status":"Нет на складе",
      "sailer":"testUser4",
      "categori":"Горячее",
      "img":"5_main.jpg"
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
      "id":3,
      imgsPath:[
        "3_1.jpg",
        "3_2.jpg",
        "3_3.jpg"
      ]
    },
    {
      "id":4,
      imgsPath:[
        "4_1.jpg",
        "4_2.jpg",
        "4_3.jpg"
      ]
    },
    {
      "id":5,
      imgsPath:[
        "5_1.jpg",
        "5_2.jpg",
        "5_3.jpg",
        "5_4.jpg",
        "5_5.jpg",
        "5_6.jpg"
      ]
    }
  ],
  cart:[],
  st_CategoriList: ["Нравится", "Горячее", "Предложения", "Основные"]
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
      return state.cart.length
    },
    getCart(state){
      return state.cart
    },
    getTotalOrderPrice(state){
      let p_Count=0
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
        price += (product.data.price-(product.data.price*product.data.discount))*product.count
        discount += (product.data.price*product.data.discount)*product.count
        
      });
      state.cart.forEach(element => {
        p_Count+=element.count
      });
      if(p_Count < 3){
        delivery = total*0.05
      }else{
        delivery = 0
      }
      total+=delivery
      TotalOrderPrice.Order = price
      TotalOrderPrice.Discount = discount
      TotalOrderPrice.Delivery = delivery
      TotalOrderPrice.Total = price+delivery

      return TotalOrderPrice
    }
    
  },
  mutations:{
    AddProductToCart(state,payload){
      let newObj = {
        id:payload[0].id,
        count:1,
        age:payload[1],
        data:payload[0]
      }
      if(state.cart.length ==0){
        state.cart.push(newObj)
      }else{
        if(state.cart.find(e => e.id === payload[0].id) == undefined){
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
      if(obj.categori != "Нравится"){
        obj.oldCategori = obj.categori
        obj.categori = "Нравится"
      }else{
        if(obj.oldCategori == "" ||obj.oldCategori == undefined){
          obj.categori = "Предложения"
        }else{
          obj.categori = obj.oldCategori
        }
      }
    }
  },
  actions:{

  },
  modules:{
    
  }
})