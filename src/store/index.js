import {createStore} from 'vuex'
import jsonData from '../assets/test.json'

export default createStore({
  state:{
    st_productsList: [
      {
          "id":1,
          "title": "testTitle",
          "description":"testDescription",
          "prise":"15000",
          "discount":"15%",
          "isHas":true,
          "sailer":"testUser",
          "categori":"Горячее",
          "img":[
              "path1",
              "path2",
              "path3",
              "path4"
          ]
      },
      {
          "id":2,
          "title": "testTitle2",
          "description":"testDescription2",
          "prise":"15000",
          "discount":"15%",
          "isHas":true,
          "sailer":"testUser2",
          "categori":"Предложения",
          "img":[
              "path12",
              "path22",
              "path32",
              "path42"
          ]
      },
      {
        "id":3,
        "title": "testTitle",
        "description":"testDescription",
        "prise":"15000",
        "discount":"15%",
        "isHas":true,
        "sailer":"testUser",
        "categori":"Горячее",
        "img":[
            "path1",
            "path2",
            "path3",
            "path4"
        ]
    }
  ],
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
        outList.push(objCategori)
      });
      return outList
    },
  },
  mutations:{

  },
  actions:{

  },
  modules:{
    
  }
})