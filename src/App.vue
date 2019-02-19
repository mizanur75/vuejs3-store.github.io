<template>
  <div id="app">
    
    <!-- navbar -->
    <Navbar></Navbar>
    <router-view></router-view>
    <div class="container">
      <div class="row mt-3">
        
        <!-- Inventory -->
        <div class="col-md-9">
          <div class="row mb-3">
            <div class="col-md-11">
              <input type="text" class="form-control form-control-sm" v-model="query" placeholder="Serach Here">
            </div>
          </div>
          <Inventory @addNewItem="addToCart" :items="items"></Inventory>
        </div>
        <!-- cart -->
        <Cart :items="cart"></Cart>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Inventory from './components/Inventory'
import Cart from './components/Cart'
import Data from './data'
export default {

  components:{
    Navbar,
    Inventory,
    Cart
  },

  data(){
    return{
      query: '',
      items: [],
      cart: []
    }
  },

  watch:{
    query: function (newQ, oldQ){
      if(newQ === ''){
        this.items = Data
      }else{
        this.searchItem(this.query)
      }
    }
  },

  mounted(){
    this.items = Data
  },
  methods:{
    addToCart(item){
      this.cart.push(item)
    },
    searchItem(query){
      this.items = Data.filter(item =>{
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    }
  }

}
</script>

<style>

</style>
